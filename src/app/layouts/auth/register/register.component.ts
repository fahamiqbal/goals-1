import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ApiService} from "../../../core/crm-api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = this.formBuilder.group({
    username: '',
    password: '',
    password_repeat: ''
  });

  constructor(private formBuilder: FormBuilder,private service:ApiService,private router: Router) {}

  async onSubmit() {
    var params = {
        $username: this.registerForm.controls['username'].value,
        password: this.registerForm.controls['password'].value,
    };
    var response = await this.service.customCALL(params, 'createUser');
    console.log(response)
    // var res = JSON.parse(response);
    // if(res.id)
    // {
    //   localStorage.setItem('user',JSON.stringify(res));
    //   this.router.navigate(['/dashboard/Home']);
    // }
    // else
    // {
    //   alert(res.description);
    // }
    console.warn('Your order has been submitted', this.registerForm.value);
    this.registerForm.reset();
  }

}
