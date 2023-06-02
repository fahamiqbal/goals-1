import { Component } from '@angular/core';
import {ApiService} from "../../../core/crm-api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(service: ApiService, private router: Router) {
    service = new ApiService();
    console.log(this.getModules(service));
    console.log("hello");

  }

  async getModules(service: ApiService) {
    let user = JSON.parse(localStorage.getItem('user') || '{}');

    var params = {
      session: user.id,
      filter: "all"
    }
    await service.CALL(params, "get_available_modules");
  }
}
