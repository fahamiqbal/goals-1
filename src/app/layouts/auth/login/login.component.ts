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
    username: '',
    password: ''
  });

  constructor(private formBuilder: FormBuilder,private service:ApiService,private router: Router) {}

  onSubmit(): void {
    // var params = {
    //   user_auth: {
    //     user_name: this.loginForm.username.value,
    //     password: this.loginForm.password.value,
    //     encryption: 'PLAIN'
    //   },
    //   application_name: '',
    //   name_value_list: {
    //     name: 'notifyonsave',
    //     value: 'true'
    //   }
    // };
    // var response = await this.service.CALL(params, 'login');
    // var res = JSON.parse(response);
    // if(res.id)
    // {
    //   localStorage.setItem('session_ID',res.id);
    //   this.router.navigate(['/admin/admin-home']);
    // }
    // else
    // {
    //   alert(res.description);
    // }
    console.warn('Your order has been submitted', this.loginForm.value);
    this.loginForm.reset();
  }

}
