import { Component } from '@angular/core';
import { formatDate } from '@angular/common';


@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.css']
})
export class TicketComponent {


    isDetailed = true;
    isSelected = true;

    detailedSearch() {
        this.isDetailed = !this.isDetailed;
    }

    selectedTicket() {
        this.isSelected =! this.isSelected;
    }
    displayDate() {
        formatDate;
    }
    elemSelect() {
       
        

var res = document.getElementById("order-info").addEventListener("click", this.displayDate);


    }
}