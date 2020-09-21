import { Component } from '@angular/core';

@Component ({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

     arr = {

        name: ["item1", "item2", "item3"],
        age: [24, 12, 23]

    };


}