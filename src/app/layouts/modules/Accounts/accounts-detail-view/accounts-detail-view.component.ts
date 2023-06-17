import { Component,OnInit,AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/crm-api/api.service';
// Initialization for ES Users
import {
  Tab,
  initTE,
} from "tw-elements";


@Component({
  selector: 'app-accounts-detail-view',
  templateUrl: './accounts-detail-view.component.html',
  styleUrls: ['./accounts-detail-view.component.scss']
})
export class AccountsDetailViewComponent implements OnInit, AfterContentInit {
  name: string = '';
  isEditable: boolean = false;

  activeTab: string = 'tab1';
  myForm: FormGroup;
  id: string;

  constructor(private formBuilder: FormBuilder,private apiService: ApiService,private route: ActivatedRoute)
  {
      initTE({ Tab });
  }

  ngAfterContentInit() {
    this.getEntry();
  }

  getEntry() {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    var params = {
      session:user.id,
      module_name:"Accounts",
      id:this.id,
      select_fields:[],
    }
    console.log(params)
    this.apiService.CALL(params, "get_entry").then((jsonData:any) => {
      // var data = JSON.parse(jsonData)
      console.log(jsonData)
    }).catch((error) => {
      console.warn('Error fetching JSON data:', error);
    });
  }

  makeEditable() {
    this.isEditable = true;
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.myForm = this.formBuilder.group({

    });

  }

  saveForm() {
    if (this.myForm.valid) {
      // Perform your save logic here
      console.log('Form saved:', this.myForm.value);
      this.isEditable = false;
    }
  }



}
