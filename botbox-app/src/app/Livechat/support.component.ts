import { Component } from '@angular/core';
import { transition } from '@angular/animations';


@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./livechat.component.css']
})
export class SupportComponent {


  
  isShow = false;
  supportBot = false;

  supportToggle() {
    this.supportBot = !this.supportBot;

  }


  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  agents = {

    name: ["Jeremías del Pozo", "Marshall Bruce Mathers", "Drake", "Katrina Bennett"],
    /* change name property to fullName */

  };
 
 
  
}