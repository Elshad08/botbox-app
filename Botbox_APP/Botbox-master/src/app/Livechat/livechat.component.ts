import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { style } from '@angular/animations';
import { NgForm } from '@angular/forms';
import { WebSocketService } from '../service/web-socket.service';
import { ChatMessageDto } from '../models/chatMessageDto';

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

  constructor(
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

  ngOnInit() {
    
    this.webSocketService.openWebSocket();
    this.observable$ = this.http
      .get(
        'https://bankoff.org/api/Conversation/xenioo?userid=7f2354fc-d2e6-4e9c-89df-193dcd83c7c9'
      )
      .pipe(map((res: any) => res.Parts));
    this.onFetchPosts();

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
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer lhQKLInJ2jBaaQXw7DyBNLsx',
        'chat-dir': 'OPERATOR',
        'user-id': '7f2354fc-d2e6-4e9c-89df-193dcd83c7c9',
      },
      body: '{ "Text": "' + postData.message + '" }',
    };
    fetch(
      'https://app02.xenioo.com/apihook/chat',
      requestOptions
    ).then((response) => console.log('Success:', JSON.stringify(response)));
    this.li = postData;
    this.list_item = this.li.list;
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.http
      .get(
        'https://bankoff.org/api/Conversation/xenioo?userid=7f2354fc-d2e6-4e9c-89df-193dcd83c7c9'
      )
      .subscribe((posts: any) => {
        this.li = posts.Parts;
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
