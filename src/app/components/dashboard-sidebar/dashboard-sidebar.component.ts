import { Component } from '@angular/core';
import {faAddressBook} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faPeopleGroup} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent {
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


  openNav() {
    var sidebar = window.document.getElementById('mySidebar');
    if (sidebar === null) {
    } else {
      sidebar.style.width = "250px";
      sidebar.style.marginLeft = "250px";
    }
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeNav() {
    var sidebar = window.document.getElementById('mySidebar');
    if (sidebar === null) {
    } else {
      sidebar.style.width = "0";
      sidebar.style.marginLeft = "0";
    }
  }
}
