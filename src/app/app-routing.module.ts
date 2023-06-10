import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./layouts/auth/auth.component";
import {LoginComponent} from "./layouts/auth/login/login.component";
import {RegisterComponent} from "./layouts/auth/register/register.component";
import {authGuard} from "./shared/guards/auth.guard";
import {HomeComponent} from "./layouts/modules/home/home.component";
import {DashboardComponent} from "./layouts/modules/dashboard/dashboard.component";
import {ContactUsComponent} from "./layouts/modules/contact-us/contact-us.component";


const routes: Routes = [
  // auth views
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent, canActivate: [authGuard],},
      { path: 'register', component: RegisterComponent, canActivate: [authGuard],},
      // { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'contact-us', component: ContactUsComponent},
      // { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
