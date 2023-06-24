import { Component,OnInit,AfterContentInit,ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/crm-api/api.service';
import * as moment from 'moment';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';


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
  id: string ;
  date_entered: Date;
  date_modified: Date;


  // selectedDate: string = moment().format('YYYY-MM-DD HH:mm:ss');
  // @ViewChild('dateTimePicker') dateTimePicker: MatDatepicker<any>;


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

        this.date_entered = this.myForm.get('date_entered')!.value;
        this.date_entered = moment(this.date_entered).toDate(); // Parse the date string into a Date object
        this.myForm.controls['date_entered'].setValue(this.date_entered); // Update the value of date_entered form control

        this.date_modified = this.myForm.get('date_modified')!.value;
        this.date_modified = moment(this.date_modified).toDate(); // Parse the date string into a Date object
        this.myForm.controls['date_modified'].setValue(this.date_modified); // Update the value of date_entered form control


        console.log(this.date_entered)
        console.log(this.myForm)
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
      const date_entered = moment(this.myForm.get('date_entered')!.value).format("YYYY-MM-DD HH:mm:ss");
      const date_modified = moment(this.myForm.get('date_modified')!.value).format("YYYY-MM-DD HH:mm:ss");

      var setEntry = this.myForm.value;

      if(setEntry.date_entered)
      {
        setEntry.date_entered = date_entered
      }
      if(setEntry.date_modified)
      {
        setEntry.date_modified = date_modified
      }

      console.log('Form saved:', setEntry);
      this.isEditable = false;
    }
  }



}
