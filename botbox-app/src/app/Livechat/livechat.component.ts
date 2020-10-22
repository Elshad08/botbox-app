import { Component } from '@angular/core';

@Component ({
    selector: 'app-livechat',
    templateUrl: './livechat.component.html',
    styleUrls: ['./livechat.component.css']
})
export class LivechatComponent {
    agents = {

        name: ["Jeremías del Pozo", "Marshall Bruce Mathers", "Drake", "Katrina Bennett"],
        age: [24, 12, 23]

    };

    isHidden = false;
    isShow = false;
    supportBot = false;

    isCanned = false;
  
    supportToggle() {
      this.supportBot = !this.supportBot;

    }
  

    toggleDisplay() {
      this.isShow = !this.isShow;
    }

    toggleCanned() {
      this.isCanned =! this.isCanned;
    }
  
    toggleDetail() {
      this.isHidden =! this.isHidden;
    }

}