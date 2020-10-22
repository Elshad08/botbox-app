
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  
  postId;
  isClicked = false;
  li: any;
  lis = [];
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    var myUrl = 'https://bankoff.org/api/Conversation/getarchive';
    function getPostById() {
      let id: number = 1;
      let endPoints = "/posts/" + id;
      this.http.get(this.myUrl + endPoints).subscribe(data => {
        console.log(data);
      });
    }
    // http://www.mocky.io/v2/5ea172973100002d001eeada
    var x = this.http.get('https://bankoff.org/api/Conversation/getarchive')
      .subscribe(Response => {

        if (Response) {
          hideloader();
        }
        console.log(Response)
        this.li = Response;
        this.lis = this.li.list;
      });
    function hideloader() {
      document.getElementById('loading').style.display = 'none';
      console.log(x)
    }

  }
}

