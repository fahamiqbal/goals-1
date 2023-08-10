import {Component, Input, ViewEncapsulation} from '@angular/core';
import {  ViewChild, AfterContentInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import {ApiService} from "../../core/crm-api/api.service";
import {MatTableDataSource} from "@angular/material/table";
import { Router } from '@angular/router';
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None // Add this line
})
export class TableComponent implements AfterContentInit {

  @Input() module_name = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;


  displayedColumns: string[] = ['Name', 'City', 'Phone', 'Date Created', 'Email'];
  // @ts-ignore
  dataSource: MatTableDataSource<any>;
  jsonData:any;
  pageIndex = 0;
  pageSize = 10;
  totalPages: number = 0;
  offset: number = 0;
  totalAccounts: number = 0;
  filters: string = '';

  constructor(private apiService: ApiService,private router:Router) {
    this.dataSource = new MatTableDataSource();
    this.dataSource.sort = this.sort;
  }

  ngAfterContentInit() {
    this.loadAccounts();
    this.sort.sortChange.subscribe(() => {
      const sortDirection = this.sort.direction;
      let sortBy = this.sort.active;

      switch (sortBy) {
        case 'Name':
          sortBy = ' name '+sortDirection;
          break;
        case 'City':
          sortBy = ' billing_address_city '+sortDirection;
          break;
        case 'Phone':
          sortBy = ' phone_office '+sortDirection;
          break;
        case 'Email':
          sortBy = ' email1 '+sortDirection;
          break;
        case 'Date Created':
          sortBy = ' date_entered '+sortDirection;
          break;
        default:
          sortBy = '';
      }

      // @ts-ignore
      this.loadAccounts(sortBy, sortDirection);
    });
  }

  async loadAccounts(sortBy = null, sortDirection = null ) {
    this.offset = this.pageIndex * this.pageSize;
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    var params = {
      session:user.id,
      module_name:"Accounts",
      query: this.filters,
      order_by: sortBy,
      offset : this.offset,
      select_fields: null,
      $link_name_to_fields_array: null,
      $max_results: this.pageSize,
    }
    await this.apiService.CALL(params, "get_entry_list").then((jsonData:any) => {
      var data = JSON.parse(jsonData).entry_list
      this.totalAccounts = JSON.parse(jsonData).total_count

      this.jsonData = data;
      this.totalPages = Math.ceil(this.totalAccounts / this.pageSize);
      this.dataSource = new MatTableDataSource(this.jsonData);
      this.dataSource.data = this.jsonData;
    }).catch((error) => {
      console.error('Error fetching JSON data:', error);
    });
  }

  redirectToDetails(id: string) {
    this.router.navigate(['/dashboard/AccountsDetailView/', id]);
  }

  pageChanged(event: any) {
    this.pageIndex = event.pageIndex;
    const sortDirection = this.sort.direction;
    let sortBy = this.sort.active;
    switch (sortBy) {
      case 'Name':
        sortBy = ' name '+sortDirection;
        break;
      case 'City':
        sortBy = ' billing_address_city '+sortDirection;
        break;
      case 'Phone':
        sortBy = ' phone_office '+sortDirection;
        break;
      case 'Email':
        sortBy = ' email1 '+sortDirection;
        break;
      case 'Date Created':
        sortBy = ' date_entered '+sortDirection;
        break;
      default:
        sortBy = '';
    }
    // @ts-ignore
    this.loadAccounts(sortBy);
  }


  getEntries() {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    var params = {
      session:user.id,
      module_name:"Accounts",
    }
    this.apiService.CALL(params, "get_entry_list").then((jsonData:any) => {
      var data = JSON.parse(jsonData).entry_list
      console.log(data)
      this.jsonData = data;
      this.dataSource = new MatTableDataSource(this.jsonData);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }).catch((error) => {
      console.error('Error fetching JSON data:', error);
    });
  }

  loadData() {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    if(user.id)
    {
      let params = {
        session:user.id,
        module_name:this.module_name,
      }
      this.apiService.SyncCALL(params, 'get_entry_list')
        .subscribe(function (response: any) {
            console.log(response)
        });
    }
  }
}
