import { Component } from '@angular/core';
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faCog} from "@fortawesome/free-solid-svg-icons";
import {faSignOut} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent {
  userAvatar = faUser;
  cog = faCog;
  signOut = faSignOut;
}
