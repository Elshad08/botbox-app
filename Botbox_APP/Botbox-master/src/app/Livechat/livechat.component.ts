import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { style } from '@angular/animations';
import { NgForm } from '@angular/forms';
import { WebSocketService } from '../service/web-socket.service';
import { ChatMessageDto } from '../models/chatMessageDto';

import { SignalRService } from '../services/signal-r.service';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-livechat',
  templateUrl: './livechat.component.html',
  styleUrls: ['./livechat.component.css'],
})
export class LivechatComponent implements OnInit, OnDestroy {
  message;
  loadedPosts = [];
  list_item = [];
  observable$: any;
  li: any;
  lis = [];
  cannedMenu = false;
  isHidden = false;
  isShow = false;
  supportBot = false;
  isCanned = true;
  messages: any[] = [];


  constructor(
    public signalRService: SignalRService,
    private router: Router,
    private http: HttpClient,
    private _el: ElementRef,
    public webSocketService: WebSocketService
  ) {}
  agents = {
    name: [
      'Jeremías del Pozo',
      'Marshall Bruce Mathers',
      'Drake',
      'Katrina Bennett',
    ],
    age: [24, 12, 23],
  };

  baseUrl = 'https://localhost:44340/api/';


  ngOnInit() {
    
    this.webSocketService.openWebSocket();
    // this.observable$ = this.http
    //   .get(
    //     'https://bankoff.org/api/Conversation/xenioo?userid=7f2354fc-d2e6-4e9c-89df-193dcd83c7c9'
    //   )
    //   .pipe(map((res: any) => res.Parts));
    this.onFetchPosts();

    this.signalRService.startConnection();
    this.signalRService.addMessageReceivedListener((userId, text) => this.messages.push({Text : text, Type : 19}));
  }

  ngOnDestroy() {
    this.webSocketService.closeWebSocket();
  }
  sendMessage(postForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(
      postForm.value.user,
      postForm.value.message
    );
    this.webSocketService.sendMessage(chatMessageDto);
    postForm.controls.message.reset();
  }

  onCreatePost(postData: { message: string }) {
    // const requestOptions = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: 'Bearer lhQKLInJ2jBaaQXw7DyBNLsx',
    //     'chat-dir': 'OPERATOR',
    //     'user-id': '7f2354fc-d2e6-4e9c-89df-193dcd83c7c9',
    //   },
    //   body: '{ "Text": "' + postData.message + '" }',
    // };
    // fetch(
    //   'https://app02.xenioo.com/apihook/chat',
    //   requestOptions
    // ).then((response) => console.log('Success:', JSON.stringify(response)));

    const data = { 'text' : postData.message, 'userId' : '7f2354fc-d2e6-4e9c-89df-193dcd83c7c9'};

    console.log(data);

    const requestOptions = {
      method: 'POST',
      headers: {
            'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };
      fetch(
         this.baseUrl + 'message/sendmsg/',
         requestOptions
        ).then((response) => console.log('Success:', JSON.stringify(response)));
        
     this.li = postData;
     this.list_item = this.li.list;
      
     this.messages.push({Text : postData.message, Type : 0})
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  fetchPosts() {
    // this.http
    //   .get(
    //     'https://bankoff.org/api/Conversation/xenioo?userid=7f2354fc-d2e6-4e9c-89df-193dcd83c7c9'
    //    this.baseUrl + 'message/getall?conversationid=7f2354fc-d2e6-4e9c-89df-193dcd83c7c9'
    //   );
      // .subscribe((posts: any) => {
      //   this.li = posts.Parts;
      // });

      const requestOptions = {
        method: 'GET',
        headers: {
              'Content-Type': 'application/json' }
        };

      fetch(this.baseUrl + 'message/getall?conversationid=1', requestOptions)
      .then( resp => {
        return resp.json()
      })
      .then(data => {
         console.log(data)
           data.forEach(element => {
             console.log(element)
             this.messages.push({Text : element.text, Type : element.type});
           });
      });
  }

  public scrollToBottom() {
    const el: HTMLDivElement = this._el.nativeElement;
    el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight);
  }

  supportToggle() {
    this.supportBot = !this.supportBot;
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  toggleCanned() {
    this.isCanned = !this.isCanned;
  }

  toggleDetail() {
    this.isHidden = !this.isHidden;
    this.router.navigateByUrl('/profile');
  }

  cannedClick() {
    this.cannedMenu = !this.cannedMenu;
  }
}
