import {Component, OnInit} from '@angular/core';
import {faAddressBook} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faPeopleGroup} from "@fortawesome/free-solid-svg-icons";
import {MessageService} from "../../core/message-service/message.service";
import {ApiService} from "../../core/crm-api/api.service";
import {Router} from "@angular/router";




@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent implements OnInit{


   icons = {
    Home : faPeopleGroup,
    Accounts : faPeopleGroup,
    Contacts : faPeopleGroup,
    Opportunities : faPeopleGroup,
    Leads : faPeopleGroup,
    Quotes : faPeopleGroup,
    Calendar : faPeopleGroup,
    Documents : faPeopleGroup,
    Emails : faPeopleGroup,
    Spots : faPeopleGroup,
    Campaigns : faPeopleGroup,
    Calls : faPeopleGroup,
    Meetings : faPeopleGroup,
    Tasks : faPeopleGroup,
    Notes : faPeopleGroup,
    AOS_Invoices : faPeopleGroup,
    AOS_Contracts : faPeopleGroup,
    Cases : faPeopleGroup,
    Prospects : faPeopleGroup,
    ProspectLists : faPeopleGroup,
    Projects : faPeopleGroup,
    AM_ProjectTemplates : faPeopleGroup,
    FP_events : faPeopleGroup,
    FP_Event_Locations : faPeopleGroup,
    AOS_Products : faPeopleGroup,
    AOS_Product_Categories : faPeopleGroup,
    AOS_PDF_Templates : faPeopleGroup,
    AOR_Reports : faPeopleGroup,
    AOK_KnowledgeBase : faPeopleGroup,
    AOK_Knowledge_Base_Categories : faPeopleGroup,
    EmailTemplates : faPeopleGroup,
    Surveys : faPeopleGroup,

  }
  modules:any= null;

  constructor(private messageService: MessageService,private service: ApiService, private router: Router) {
  }


  ngOnInit() {
    this.service = new ApiService();
    this.getModules(this.service)

    this.messageService.getFlag().subscribe(message => {
      if(message.open === true)
      {
        this.openNav()
      }
    });
  }


  async getModules(service: ApiService) {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    var params = {
      session: user.id,
      filter: "default"
    }
    this.modules = JSON.parse(await service.CALL(params, "get_available_modules"));
    this.modules = (this.modules.modules)
    return this.modules;
  }


  openNav() {
    var sidebar = window.document.getElementById('mySidebar');
    if (sidebar === null) {
    } else {
      sidebar.style.width = "250px";
    }
  }


  closeNav() {
    var sidebar = window.document.getElementById('mySidebar');
    if (sidebar === null) {
    } else {
      sidebar.style.width = "0";
      sidebar.style.marginLeft = "0";
    }
  }

}



