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

  async ngAfterContentInit() {

     await this.getEntry();
  }

  getEntry() {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    var params = {
      session:user.id,
      module_name:"Accounts",
      id:this.id,
      select_fields:[],
      link_name_to_fields_array:[],
    }
    this.apiService.CALL(params, "get_entry").then((jsonData:any) => {
      var data = JSON.parse(jsonData)
      if(data.entry_list[0].name_value_list)
      {
        jsonData = data.entry_list[0].name_value_list;
        const formControlsConfig:any = {};
        for (const key of Object.keys(jsonData)) {
          formControlsConfig[key] = [jsonData[key].value];
        }
        this.myForm = this.formBuilder.group(formControlsConfig);
        console.log(formControlsConfig)
      }
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
    

  }

  saveForm() {
    if (this.myForm.valid) {
      // Perform your save logic here
      console.log('Form saved:', this.myForm.value);
      this.isEditable = false;
    }
  }



}
