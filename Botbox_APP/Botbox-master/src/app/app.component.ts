import { Component, OnInit, ContentChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ContentRef } from '@ng-bootstrap/ng-bootstrap/util/popup';
import { partition } from 'rxjs';







@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'botbox-app';
  message;
  list_item = [];
  appList:any;
  observable$: any;
  li: any;
  lis = [];
  
  constructor(private http: HttpClient) { }



  ngOnInit() { }

  onFetchPosts() {
    this.fetchPosts();
  }

  onCreatePost(postData: { message: string }) {

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer N16ihSob5PRuB2J1UKv5CPSs',
        'user-id': 'df3f59ee-325c-4b69-abed-e183a5f3c609'
      },
      body: '{ "Text": "' + postData.message + '" }',

    };

    fetch('https://app02.xenioo.com/apihook/chat', requestOptions)
     .then(response => console.log('Success:', JSON.stringify(response)));

    this.li = postData;
    this.list_item = this.li.list;

  }

  private fetchPosts() {

    this.http
      .get('http://chat.eu-central-1.elasticbeanstalk.com/api/conversation/getall?adminid=4')
      .subscribe((posts: any) => {
        // this.li = posts.Parts;

        this.appList = posts;
        console.log("This is posts:m " + JSON.stringify(posts))
        console.log("This is applist: " + JSON.stringify(this.appList))
       
      });


  }

}
