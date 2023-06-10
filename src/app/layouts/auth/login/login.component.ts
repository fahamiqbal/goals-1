import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from "../../../core/crm-api/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ApiService]
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  constructor(private formBuilder: FormBuilder,private service:ApiService,private router: Router) {}

  async onSubmit() {
    var params = {
      user_auth: {
        user_name: this.loginForm.controls['email'].value,
        password: this.loginForm.controls['password'].value,
        encryption: 'PLAIN'
      },
      application_name: '',
      name_value_list: {
        name: 'notifyonsave',
        value: 'true'
      }
    };
    var response = await this.service.CALL(params, 'login');
    var res = JSON.parse(response);
    if(res.id)
    {
      localStorage.setItem('user',JSON.stringify(res));
      this.router.navigate(['/dashboard/Home']);
    }
    else
    {
      alert(res.description);
    }
    console.warn('Your order has been submitted', this.loginForm.value);
    this.loginForm.reset();
  }

}
