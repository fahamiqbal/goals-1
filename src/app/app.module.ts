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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactUsComponent } from './layouts/modules/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountsListViewComponent } from './layouts/modules/Accounts/accounts-list-view/accounts-list-view.component';
import { AccountsDetailViewComponent } from './layouts/modules/Accounts/accounts-detail-view/accounts-detail-view.component';
import { AccountsEditViewComponent } from './layouts/modules/Accounts/accounts-edit-view/accounts-edit-view.component';
import { ContactsListViewComponent } from './layouts/modules/Contacts/contacts-list-view/contacts-list-view.component';
import { ContactsDetailViewComponent } from './layouts/modules/Contacts/contacts-detail-view/contacts-detail-view.component';
import { ContactsEditViewComponent } from './layouts/modules/Contacts/contacts-edit-view/contacts-edit-view.component';
import { OpportunitiesListViewComponent } from './layouts/modules/Opportunities/opportunities-list-view/opportunities-list-view.component';
import { OpportunitiesDetailViewComponent } from './layouts/modules/Opportunities/opportunities-detail-view/opportunities-detail-view.component';
import { OpportunitiesEditViewComponent } from './layouts/modules/Opportunities/opportunities-edit-view/opportunities-edit-view.component';
import { LeadsListViewComponent } from './layouts/modules/Leads/leads-list-view/leads-list-view.component';
import { LeadsDetailViewComponent } from './layouts/modules/Leads/leads-detail-view/leads-detail-view.component';
import { LeadsEditViewComponent } from './layouts/modules/Leads/leads-edit-view/leads-edit-view.component';
import { AOSQuotesListViewComponent } from './layouts/modules/AOS_Quotes/aos-quotes-list-view/aos-quotes-list-view.component';
import { AOSQuotesDetailViewComponent } from './layouts/modules/AOS_Quotes/aos-quotes-detail-view/aos-quotes-detail-view.component';
import { AOSQuotesEditViewComponent } from './layouts/modules/AOS_Quotes/aos-quotes-edit-view/aos-quotes-edit-view.component';
import { CalendarListViewComponent } from './layouts/modules/Calendar/calendar-list-view/calendar-list-view.component';
import { CalendarDetailViewComponent } from './layouts/modules/Calendar/calendar-detail-view/calendar-detail-view.component';
import { CalendarEditViewComponent } from './layouts/modules/Calendar/calendar-edit-view/calendar-edit-view.component';
import { DocumentsListViewComponent } from './layouts/modules/Documents/documents-list-view/documents-list-view.component';
import { DocumentsDetailViewComponent } from './layouts/modules/Documents/documents-detail-view/documents-detail-view.component';
import { DocumentsEditViewComponent } from './layouts/modules/Documents/documents-edit-view/documents-edit-view.component';
import { EmailsListViewComponent } from './layouts/modules/Emails/emails-list-view/emails-list-view.component';
import { EmailsDetailViewComponent } from './layouts/modules/Emails/emails-detail-view/emails-detail-view.component';
import { EmailsEditViewComponent } from './layouts/modules/Emails/emails-edit-view/emails-edit-view.component';
import { SpotsListViewComponent } from './layouts/modules/Spots/spots-list-view/spots-list-view.component';
import { SpotsDetailViewComponent } from './layouts/modules/Spots/spots-detail-view/spots-detail-view.component';
import { SpotsEditViewComponent } from './layouts/modules/Spots/spots-edit-view/spots-edit-view.component';
import { CampaignsListViewComponent } from './layouts/modules/Campaigns/campaigns-list-view/campaigns-list-view.component';
import { CampaignsDetailViewComponent } from './layouts/modules/Campaigns/campaigns-detail-view/campaigns-detail-view.component';
import { CampaignsEditViewComponent } from './layouts/modules/Campaigns/campaigns-edit-view/campaigns-edit-view.component';
import { CallsListViewComponent } from './layouts/modules/Calls/calls-list-view/calls-list-view.component';
import { CallsDetailViewComponent } from './layouts/modules/Calls/calls-detail-view/calls-detail-view.component';
import { CallsEditViewComponent } from './layouts/modules/Calls/calls-edit-view/calls-edit-view.component';
import { MeetingsListViewComponent } from './layouts/modules/Meetings/meetings-list-view/meetings-list-view.component';
import { MeetingsDetailViewComponent } from './layouts/modules/Meetings/meetings-detail-view/meetings-detail-view.component';
import { MeetingsEditViewComponent } from './layouts/modules/Meetings/meetings-edit-view/meetings-edit-view.component';
import { TasksListViewComponent } from './layouts/modules/Tasks/tasks-list-view/tasks-list-view.component';
import { TasksDetailViewComponent } from './layouts/modules/Tasks/tasks-detail-view/tasks-detail-view.component';
import { TasksEditViewComponent } from './layouts/modules/Tasks/tasks-edit-view/tasks-edit-view.component';
import { NotesListViewComponent } from './layouts/modules/Notes/notes-list-view/notes-list-view.component';
import { NotesDetailViewComponent } from './layouts/modules/Notes/notes-detail-view/notes-detail-view.component';
import { NotesEditViewComponent } from './layouts/modules/Notes/notes-edit-view/notes-edit-view.component';
import { AOSInvoicesListViewComponent } from './layouts/modules/AOS_Invoices/aos-invoices-list-view/aos-invoices-list-view.component';
import { AOSInvoicesDetailViewComponent } from './layouts/modules/AOS_Invoices/aos-invoices-detail-view/aos-invoices-detail-view.component';
import { AOSInvoicesEditViewComponent } from './layouts/modules/AOS_Invoices/aos-invoices-edit-view/aos-invoices-edit-view.component';
import { AOSContractsListViewComponent } from './layouts/modules/AOS_Contracts/aos-contracts-list-view/aos-contracts-list-view.component';
import { AOSContractsDetailViewComponent } from './layouts/modules/AOS_Contracts/aos-contracts-detail-view/aos-contracts-detail-view.component';
import { AOSContractsEditViewComponent } from './layouts/modules/AOS_Contracts/aos-contracts-edit-view/aos-contracts-edit-view.component';
import { CasesListViewComponent } from './layouts/modules/Cases/cases-list-view/cases-list-view.component';
import { CasesDetailViewComponent } from './layouts/modules/Cases/cases-detail-view/cases-detail-view.component';
import { CasesEditViewComponent } from './layouts/modules/Cases/cases-edit-view/cases-edit-view.component';
import { ProspectsListViewComponent } from './layouts/modules/Prospects/prospects-list-view/prospects-list-view.component';
import { ProspectsDetailViewComponent } from './layouts/modules/Prospects/prospects-detail-view/prospects-detail-view.component';
import { ProspectsEditViewComponent } from './layouts/modules/Prospects/prospects-edit-view/prospects-edit-view.component';
import { ProspectListsListViewComponent } from './layouts/modules/ProspectLists/prospect-lists-list-view/prospect-lists-list-view.component';
import { ProspectListsDetailViewComponent } from './layouts/modules/ProspectLists/prospect-lists-detail-view/prospect-lists-detail-view.component';
import { ProspectListsEditViewComponent } from './layouts/modules/ProspectLists/prospect-lists-edit-view/prospect-lists-edit-view.component';
import { ProjectListViewComponent } from './layouts/modules/Project/project-list-view/project-list-view.component';
import { ProjectDetailViewComponent } from './layouts/modules/Project/project-detail-view/project-detail-view.component';
import { ProjectEditViewComponent } from './layouts/modules/Project/project-edit-view/project-edit-view.component';
import { AMProjectTemplatesListViewComponent } from './layouts/modules/AM_ProjectTemplates/am-project-templates-list-view/am-project-templates-list-view.component';
import { AMProjectTemplatesDetailViewComponent } from './layouts/modules/AM_ProjectTemplates/am-project-templates-detail-view/am-project-templates-detail-view.component';
import { AMProjectTemplatesEditViewComponent } from './layouts/modules/AM_ProjectTemplates/am-project-templates-edit-view/am-project-templates-edit-view.component';
import { FPEventsListViewComponent } from './layouts/modules/FP_events/fp-events-list-view/fp-events-list-view.component';
import { FPEventsDetailViewComponent } from './layouts/modules/FP_events/fp-events-detail-view/fp-events-detail-view.component';
import { FPEventsEditViewComponent } from './layouts/modules/FP_events/fp-events-edit-view/fp-events-edit-view.component';
import { FPEventLocationsListViewComponent } from './layouts/modules/FP_Event_Locations/fp-event-locations-list-view/fp-event-locations-list-view.component';
import { FPEventLocationsDetailViewComponent } from './layouts/modules/FP_Event_Locations/fp-event-locations-detail-view/fp-event-locations-detail-view.component';
import { FPEventLocationsEditViewComponent } from './layouts/modules/FP_Event_Locations/fp-event-locations-edit-view/fp-event-locations-edit-view.component';
import { AOSProductsListViewComponent } from './layouts/modules/AOS_Products/aos-products-list-view/aos-products-list-view.component';
import { AOSProductsDetailViewComponent } from './layouts/modules/AOS_Products/aos-products-detail-view/aos-products-detail-view.component';
import { AOSProductsEditViewComponent } from './layouts/modules/AOS_Products/aos-products-edit-view/aos-products-edit-view.component';
import { AOSProductCategoriesListViewComponent } from './layouts/modules/AOS_Product_Categories/aos-product-categories-list-view/aos-product-categories-list-view.component';
import { AOSProductCategoriesDetailViewComponent } from './layouts/modules/AOS_Product_Categories/aos-product-categories-detail-view/aos-product-categories-detail-view.component';
import { AOSProductCategoriesEditViewComponent } from './layouts/modules/AOS_Product_Categories/aos-product-categories-edit-view/aos-product-categories-edit-view.component';
import { AOSPDFTemplatesListViewComponent } from './layouts/modules/AOS_PDF_Templates/aos-pdf-templates-list-view/aos-pdf-templates-list-view.component';
import { AOSPDFTemplatesDetailViewComponent } from './layouts/modules/AOS_PDF_Templates/aos-pdf-templates-detail-view/aos-pdf-templates-detail-view.component';
import { AOSPDFTemplatesEditViewComponent } from './layouts/modules/AOS_PDF_Templates/aos-pdf-templates-edit-view/aos-pdf-templates-edit-view.component';
import { AORReportsListViewComponent } from './layouts/modules/AOR_Reports/aor-reports-list-view/aor-reports-list-view.component';
import { AORReportsDetailViewComponent } from './layouts/modules/AOR_Reports/aor-reports-detail-view/aor-reports-detail-view.component';
import { AORReportsEditViewComponent } from './layouts/modules/AOR_Reports/aor-reports-edit-view/aor-reports-edit-view.component';
import { AOKKnowledgeBaseListViewComponent } from './layouts/modules/AOK_KnowledgeBase/aok-knowledge-base-list-view/aok-knowledge-base-list-view.component';
import { AOKKnowledgeBaseDetailViewComponent } from './layouts/modules/AOK_KnowledgeBase/aok-knowledge-base-detail-view/aok-knowledge-base-detail-view.component';
import { AOKKnowledgeBaseEditViewComponent } from './layouts/modules/AOK_KnowledgeBase/aok-knowledge-base-edit-view/aok-knowledge-base-edit-view.component';
import { AOKKnowledgeBaseCategoriesListViewComponent } from './layouts/modules/AOK_Knowledge_Base_Categories/aok-knowledge-base-categories-list-view/aok-knowledge-base-categories-list-view.component';
import { AOKKnowledgeBaseCategoriesDetailViewComponent } from './layouts/modules/AOK_Knowledge_Base_Categories/aok-knowledge-base-categories-detail-view/aok-knowledge-base-categories-detail-view.component';
import { AOKKnowledgeBaseCategoriesEditViewComponent } from './layouts/modules/AOK_Knowledge_Base_Categories/aok-knowledge-base-categories-edit-view/aok-knowledge-base-categories-edit-view.component';
import { EmailTemplatesListViewComponent } from './layouts/modules/EmailTemplates/email-templates-list-view/email-templates-list-view.component';
import { EmailTemplatesDetailViewComponent } from './layouts/modules/EmailTemplates/email-templates-detail-view/email-templates-detail-view.component';
import { EmailTemplatesEditViewComponent } from './layouts/modules/EmailTemplates/email-templates-edit-view/email-templates-edit-view.component';
import { SurveysListViewComponent } from './layouts/modules/Surveys/surveys-list-view/surveys-list-view.component';
import { SurveysDetailViewComponent } from './layouts/modules/Surveys/surveys-detail-view/surveys-detail-view.component';
import { SurveysEditViewComponent } from './layouts/modules/Surveys/surveys-edit-view/surveys-edit-view.component';
import { HomeListViewComponent } from './layouts/modules/Home/home-list-view/home-list-view.component';



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
    DashboardSidebarComponent,
    ContactUsComponent,
    FooterComponent,
    AccountsListViewComponent,
    AccountsDetailViewComponent,
    AccountsEditViewComponent,
    ContactsListViewComponent,
    ContactsDetailViewComponent,
    ContactsEditViewComponent,
    OpportunitiesListViewComponent,
    OpportunitiesDetailViewComponent,
    OpportunitiesEditViewComponent,
    LeadsListViewComponent,
    LeadsDetailViewComponent,
    LeadsEditViewComponent,
    AOSQuotesListViewComponent,
    AOSQuotesDetailViewComponent,
    AOSQuotesEditViewComponent,
    CalendarListViewComponent,
    CalendarDetailViewComponent,
    CalendarEditViewComponent,
    DocumentsListViewComponent,
    DocumentsDetailViewComponent,
    DocumentsEditViewComponent,
    EmailsListViewComponent,
    EmailsDetailViewComponent,
    EmailsEditViewComponent,
    SpotsListViewComponent,
    SpotsDetailViewComponent,
    SpotsEditViewComponent,
    CampaignsListViewComponent,
    CampaignsDetailViewComponent,
    CampaignsEditViewComponent,
    CallsListViewComponent,
    CallsDetailViewComponent,
    CallsEditViewComponent,
    MeetingsListViewComponent,
    MeetingsDetailViewComponent,
    MeetingsEditViewComponent,
    TasksListViewComponent,
    TasksDetailViewComponent,
    TasksEditViewComponent,
    NotesListViewComponent,
    NotesDetailViewComponent,
    NotesEditViewComponent,
    AOSInvoicesListViewComponent,
    AOSInvoicesDetailViewComponent,
    AOSInvoicesEditViewComponent,
    AOSContractsListViewComponent,
    AOSContractsDetailViewComponent,
    AOSContractsEditViewComponent,
    CasesListViewComponent,
    CasesDetailViewComponent,
    CasesEditViewComponent,
    ProspectsListViewComponent,
    ProspectsDetailViewComponent,
    ProspectsEditViewComponent,
    ProspectListsListViewComponent,
    ProspectListsDetailViewComponent,
    ProspectListsEditViewComponent,
    ProjectListViewComponent,
    ProjectDetailViewComponent,
    ProjectEditViewComponent,
    AMProjectTemplatesListViewComponent,
    AMProjectTemplatesDetailViewComponent,
    AMProjectTemplatesEditViewComponent,
    FPEventsListViewComponent,
    FPEventsDetailViewComponent,
    FPEventsEditViewComponent,
    FPEventLocationsListViewComponent,
    FPEventLocationsDetailViewComponent,
    FPEventLocationsEditViewComponent,
    AOSProductsListViewComponent,
    AOSProductsDetailViewComponent,
    AOSProductsEditViewComponent,
    AOSProductCategoriesListViewComponent,
    AOSProductCategoriesDetailViewComponent,
    AOSProductCategoriesEditViewComponent,
    AOSPDFTemplatesListViewComponent,
    AOSPDFTemplatesDetailViewComponent,
    AOSPDFTemplatesEditViewComponent,
    AORReportsListViewComponent,
    AORReportsDetailViewComponent,
    AORReportsEditViewComponent,
    AOKKnowledgeBaseListViewComponent,
    AOKKnowledgeBaseDetailViewComponent,
    AOKKnowledgeBaseEditViewComponent,
    AOKKnowledgeBaseCategoriesListViewComponent,
    AOKKnowledgeBaseCategoriesDetailViewComponent,
    AOKKnowledgeBaseCategoriesEditViewComponent,
    EmailTemplatesListViewComponent,
    EmailTemplatesDetailViewComponent,
    EmailTemplatesEditViewComponent,
    SurveysListViewComponent,
    SurveysDetailViewComponent,
    SurveysEditViewComponent,
    HomeListViewComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
