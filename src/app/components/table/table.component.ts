import {Component, Input} from '@angular/core';
import {  ViewChild, AfterContentInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import {ApiService} from "../../core/crm-api/api.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterContentInit {

  @Input() module_name = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['name', 'description'];
  dataSource: any[] = [] ;
  pageIndex = 0;
  pageSize = 10;
  totalItems = 0;
  constructor(private apiService: ApiService) {
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.paginator.page
        .pipe(
          tap(() => this.getEntries(this.apiService))
        )
        .subscribe();
    });
  }


  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadData();
  }

  async getEntries(service: ApiService) {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    var params = {
      session:user.id,
      module_name:"Accounts",
    }
    var data = JSON.parse(await service.CALL(params, "get_entry_list"));
    this.dataSource = data;
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
