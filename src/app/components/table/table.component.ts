import {Component, Input} from '@angular/core';
import {  ViewChild, AfterContentInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import {ApiService} from "../../core/crm-api/api.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterContentInit {

  @Input() module_name = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['Name', 'City', 'Phone', 'Date Created', 'Email'];
  // @ts-ignore
  dataSource: MatTableDataSource<any>;
  jsonData:any;
  pageIndex = 0;
  pageSize = 10;
  totalItems = 0;
  // Example JSON data

  constructor(private apiService: ApiService) {
  }

  ngAfterContentInit() {
    this.getEntries();

  }


  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadData();
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
      this.dataSource.paginator = this.paginator;
    }).catch((error) => {
      console.error('Error fetching JSON data:', error);
    });
  }

  loadData() {
    debugger;
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    if(user.id)
    {
      let params = {
        session:user.id,
        module_name:this.module_name,
      }
      console.log(params);
      this.apiService.SyncCALL(params, 'get_entry_list')
        .subscribe(function (response: any) {
            console.log(response)
        });
    }
  }
}
