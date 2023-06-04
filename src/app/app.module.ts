import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { LoginComponent } from './layouts/auth/login/login.component';
import { RegisterComponent } from './layouts/auth/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './layouts/modules/home/home.component';
import { DashboardComponent } from './layouts/modules/dashboard/dashboard.component';
import { DashboardNavbarComponent } from './components/dashboard-navbar/dashboard-navbar.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { DashboardSidebarComponent } from './components/dashboard-sidebar/dashboard-sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthNavbarComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    DashboardNavbarComponent,
    DashboardSidebarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FontAwesomeModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
