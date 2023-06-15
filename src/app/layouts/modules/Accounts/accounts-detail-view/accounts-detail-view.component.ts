import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
export class AccountsDetailViewComponent implements OnInit {
  name: string = '';
  isEditable: boolean = false;

  activeTab: string = 'tab1';
  myForm: FormGroup;


  constructor(private formBuilder: FormBuilder)
  {
      initTE({ Tab });
  }

  makeEditable() {
    this.isEditable = true;
  }
  
  ngOnInit() {
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
