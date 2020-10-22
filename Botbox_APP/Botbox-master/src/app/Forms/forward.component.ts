import { Component } from '@angular/core';
import { formatDate } from '@angular/common';


@Component({
    selector: 'forms-forward',
    templateUrl: './forward.component.html',
    styleUrls: ['./forward.component.css']
})
export class ForwardComponent {
    // var result = document.getElementsByClassName("order-info");
    name = "James";

    isToggled = true;

        dropDown() {
            this.isToggled = !this.isToggled;


        }

      
}