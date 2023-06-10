import { Component } from '@angular/core';
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faCog} from "@fortawesome/free-solid-svg-icons";
import {faSignOut} from "@fortawesome/free-solid-svg-icons";
import {MessageService} from "../../core/message-service/message.service";
import {ApiService} from "../../core/crm-api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent {
  userAvatar = faUser;
  cog = faCog;
  signOut = faSignOut;
  constructor(private messageService: MessageService,private apiService:ApiService, private router:Router) {
    // router = new Router();
  }
  openSideNav(): void {
    // send message to subscribers via observable subject
    this.messageService.openSideNav();
  }
  logout(): void {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    if(user.id)
    {
      var params = {
        session: user.id
      };
      this.apiService.CALL(params,'logout').then(()=>{
        localStorage.removeItem('user');
        console.log('1');
        this.router.navigate(['/auth/login']);

      })

    }

  }
}
