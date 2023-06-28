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

  async saveForm() {
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

      let user = JSON.parse(localStorage.getItem('user') || '{}');
      let nameValueList = this.getNameValueList(setEntry);
      var params = {
        session:user.id,
        module_name:"Accounts",
        name_value_list:nameValueList
      }
      await this.apiService.CALL(params, "set_entry");

      this.isEditable = false;
    }
  }

  getNameValueList(setEntry:any) {
    return {
      id: {
        "name": "id",
        "value": this.id
      },
      name: {
        "name": "name",
        "value": setEntry.name
      },
      "date_entered": {
        "name": "date_entered",
        "value": setEntry.date_entered
      },
      "date_modified": {
        "name": "date_modified",
        "value": setEntry.date_modified
      },
      "description": {
        "name": "description",
        "value": setEntry.description
      },
      "industry": {
        "name": "industry",
        "value": setEntry.industry
      },
      "annual_revenue": {
        "name": "annual_revenue",
        "value": setEntry.annual_revenue
      },
      "phone_fax": {
        "name": "phone_fax",
        "value": setEntry.phone_fax
      },
      "billing_address_street": {
        "name": "billing_address_street",
        "value": setEntry.billing_address_street
      },
      "billing_address_city": {
        "name": "billing_address_city",
        "value": setEntry.billing_address_city
      },
      "billing_address_state": {
        "name": "billing_address_state",
        "value": setEntry.billing_address_state
      },
      "billing_address_postalcode": {
        "name": "billing_address_postalcode",
        "value": setEntry.billing_address_postalcode
      },
      "billing_address_country": {
        "name": "billing_address_country",
        "value": setEntry.billing_address_country
      },
      "phone_office": {
        "name": "phone_office",
        "value": setEntry.phone_office
      },
      "website": {
        "name": "website",
        "value": setEntry.website
      },
      "shipping_address_street": {
        "name": "shipping_address_street",
        "value": setEntry.shipping_address_city
      },
      "shipping_address_city": {
        "name": "shipping_address_city",
        "value": setEntry.shipping_address_city
      },
      "shipping_address_state": {
        "name": "shipping_address_state",
        "value": setEntry.shipping_address_state
      },
      "shipping_address_country": {
        "name": "shipping_address_country",
        "value": setEntry.shipping_address_country
      },
    }
  }

}
