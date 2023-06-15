import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./layouts/auth/auth.component";
import {LoginComponent} from "./layouts/auth/login/login.component";
import {RegisterComponent} from "./layouts/auth/register/register.component";
import {authGuard} from "./shared/guards/auth.guard";
import {HomeComponent} from "./layouts/modules/home/home.component";
import {DashboardComponent} from "./layouts/modules/dashboard/dashboard.component";
import {ContactUsComponent} from "./layouts/modules/contact-us/contact-us.component";
import {AccountsListViewComponent} from "./layouts/modules/Accounts/accounts-list-view/accounts-list-view.component";
import {ContactsListViewComponent} from "./layouts/modules/Contacts/contacts-list-view/contacts-list-view.component";
import {LeadsListViewComponent} from "./layouts/modules/Leads/leads-list-view/leads-list-view.component";
import {
  OpportunitiesListViewComponent
} from "./layouts/modules/Opportunities/opportunities-list-view/opportunities-list-view.component";
import {
  AOSQuotesListViewComponent
} from "./layouts/modules/AOS_Quotes/aos-quotes-list-view/aos-quotes-list-view.component";
import {CalendarListViewComponent} from "./layouts/modules/Calendar/calendar-list-view/calendar-list-view.component";
import {
  DocumentsListViewComponent
} from "./layouts/modules/Documents/documents-list-view/documents-list-view.component";
import {EmailsListViewComponent} from "./layouts/modules/Emails/emails-list-view/emails-list-view.component";
import {SpotsListViewComponent} from "./layouts/modules/Spots/spots-list-view/spots-list-view.component";
import {
  CampaignsListViewComponent
} from "./layouts/modules/Campaigns/campaigns-list-view/campaigns-list-view.component";
import {CallsListViewComponent} from "./layouts/modules/Calls/calls-list-view/calls-list-view.component";
import {MeetingsListViewComponent} from "./layouts/modules/Meetings/meetings-list-view/meetings-list-view.component";
import {TasksListViewComponent} from "./layouts/modules/Tasks/tasks-list-view/tasks-list-view.component";
import {NotesListViewComponent} from "./layouts/modules/Notes/notes-list-view/notes-list-view.component";
import {SurveysListViewComponent} from "./layouts/modules/Surveys/surveys-list-view/surveys-list-view.component";
import {
  EmailTemplatesListViewComponent
} from "./layouts/modules/EmailTemplates/email-templates-list-view/email-templates-list-view.component";
import {ProjectListViewComponent} from "./layouts/modules/Project/project-list-view/project-list-view.component";
import {
  ProspectListsListViewComponent
} from "./layouts/modules/ProspectLists/prospect-lists-list-view/prospect-lists-list-view.component";
import {
  ProspectsListViewComponent
} from "./layouts/modules/Prospects/prospects-list-view/prospects-list-view.component";
import {CasesListViewComponent} from "./layouts/modules/Cases/cases-list-view/cases-list-view.component";
import {
  AOSInvoicesListViewComponent
} from "./layouts/modules/AOS_Invoices/aos-invoices-list-view/aos-invoices-list-view.component";
import {
  AOSContractsListViewComponent
} from "./layouts/modules/AOS_Contracts/aos-contracts-list-view/aos-contracts-list-view.component";
import {
  AMProjectTemplatesListViewComponent
} from "./layouts/modules/AM_ProjectTemplates/am-project-templates-list-view/am-project-templates-list-view.component";
import {FPEventsListViewComponent} from "./layouts/modules/FP_events/fp-events-list-view/fp-events-list-view.component";
import {
  FPEventLocationsListViewComponent
} from "./layouts/modules/FP_Event_Locations/fp-event-locations-list-view/fp-event-locations-list-view.component";
import {
  AOSProductsListViewComponent
} from "./layouts/modules/AOS_Products/aos-products-list-view/aos-products-list-view.component";
import {
  AOSPDFTemplatesListViewComponent
} from "./layouts/modules/AOS_PDF_Templates/aos-pdf-templates-list-view/aos-pdf-templates-list-view.component";
import {
  AORReportsListViewComponent
} from "./layouts/modules/AOR_Reports/aor-reports-list-view/aor-reports-list-view.component";
import {
  AOKKnowledgeBaseListViewComponent
} from "./layouts/modules/AOK_KnowledgeBase/aok-knowledge-base-list-view/aok-knowledge-base-list-view.component";
import {
  AOKKnowledgeBaseCategoriesListViewComponent
} from "./layouts/modules/AOK_Knowledge_Base_Categories/aok-knowledge-base-categories-list-view/aok-knowledge-base-categories-list-view.component";
import {HomeListViewComponent} from "./layouts/modules/Home/home-list-view/home-list-view.component";
import { AccountsDetailViewComponent } from './layouts/modules/Accounts/accounts-detail-view/accounts-detail-view.component';


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
      
      {path: 'Home', component: HomeListViewComponent},
      {path: 'AccountsDetailView/:id', component: AccountsDetailViewComponent},

      {path: 'Accounts', component: AccountsListViewComponent},
      {path: 'Contacts', component: ContactsListViewComponent},
      {path: 'Opportunities', component: OpportunitiesListViewComponent},
      {path: 'Leads', component: LeadsListViewComponent},
      {path: 'AOS_Quotes', component: AOSQuotesListViewComponent},
      {path: 'Calendar', component: CalendarListViewComponent},
      {path: 'Documents', component: DocumentsListViewComponent},
      {path: 'Emails', component: EmailsListViewComponent},
      {path: 'Spots', component: SpotsListViewComponent},
      {path: 'Campaigns', component: CampaignsListViewComponent},
      {path: 'Calls', component: CallsListViewComponent},
      {path: 'Meetings', component: MeetingsListViewComponent},
      {path: 'Tasks', component: TasksListViewComponent},
      {path: 'Notes', component: NotesListViewComponent},
      {path: 'AOS_Invoices', component: AOSInvoicesListViewComponent},
      {path: 'AOS_Contracts', component: AOSContractsListViewComponent},
      {path: 'Cases', component: CasesListViewComponent},
      {path: 'Prospects', component: ProspectsListViewComponent},
      {path: 'ProspectLists', component: ProspectListsListViewComponent},
      {path: 'Project', component: ProjectListViewComponent},
      {path: 'AM_ProjectTemplates', component: AMProjectTemplatesListViewComponent},
      {path: 'FP_events', component: FPEventsListViewComponent},
      {path: 'FP_Event_Locations', component: FPEventLocationsListViewComponent},
      {path: 'AOS_Products', component: AOSProductsListViewComponent},
      {path: 'AOS_PDF_Templates', component: AOSPDFTemplatesListViewComponent},
      {path: 'AOR_Reports', component: AORReportsListViewComponent},
      {path: 'AOK_KnowledgeBase', component: AOKKnowledgeBaseListViewComponent},
      {path: 'AOK_Knowledge_Base_Categories', component: AOKKnowledgeBaseCategoriesListViewComponent},
      {path: 'EmailTemplates', component: EmailTemplatesListViewComponent},
      {path: 'Surveys', component: SurveysListViewComponent},
      // { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
