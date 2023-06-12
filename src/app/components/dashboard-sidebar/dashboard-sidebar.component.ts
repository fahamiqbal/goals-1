import {Component, OnInit} from '@angular/core';
import {
  faAddressBook, faCalendar, faFileInvoice, faFolderOpen, faHandPointUp, faHandshakeSimple,
  faHeadset,
  faHouse, faInbox, faLightbulb, faNoteSticky,
  faShieldHalved, faSquarePhone,
  faSterlingSign, faTasks,
  faTrophy, faPeopleGroup, faFileContract, faSuitcase
} from "@fortawesome/free-solid-svg-icons";
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
    Home : faHouse,
    Accounts : faShieldHalved,
    Contacts : faAddressBook,
    Opportunities : faTrophy,
    Leads : faHeadset,
     AOS_Quotes : faSterlingSign,
    Calendar : faCalendar,
    Documents : faFolderOpen,
    Emails : faInbox,
    Spots : faHandPointUp,
    Campaigns : faLightbulb,
    Calls : faSquarePhone,
    Meetings : faHandshakeSimple,
    Tasks : faTasks,
    Notes : faNoteSticky,
    AOS_Invoices : faFileInvoice,
    AOS_Contracts : faFileContract,
    Cases : faSuitcase,
    Prospects : faPeopleGroup,
    ProspectLists : faPeopleGroup,
    Project : faPeopleGroup,
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



