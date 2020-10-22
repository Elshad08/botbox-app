import { Component } from '@angular/core';




@Component ({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],


   
})

export class SidebarComponent {



    containers  = [];

    isOpen = false;
    isConversation = false;

    groupsToggle (){
      this.isOpen = !this.isOpen;
    }
    convToggle() {
        this.isConversation =!this.isConversation;
    }
  

}


