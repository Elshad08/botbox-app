import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './Registration/register.component';

import { LoginComponent } from './Login/login.component';
import { ForgotComponent } from './Login/forgot.component';
import { ResetComponent } from './Login/reset.component';
import { SuccessComponent } from './Login/success.component';
import { ForgotSuccessComponent } from './Login/forgot-success.component';
import { ForgotFailComponent } from './Login/forgot-fail.component';

import { LivechatComponent } from './Livechat/livechat.component';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './Menu/navbar.component';
import { DashboardComponent } from './Forms/dashboard.component';
import { ChatboxComponent } from './Livechat/chatbox.component';
import { SupportComponent } from './Livechat/support.component';
import { UserdetailsComponent } from './Livechat/userdetails.component';
import { SidebarComponent } from './Menu/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CannedComponent } from './Forms/canned.component';
import { ForwardComponent } from './Forms/forward.component';

import { RouterModule, Routes } from '@angular/router';

import { CloseComponent } from './Forms/close.component';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { TicketComponent } from './Tickets/ticket.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot',
    component: ForgotComponent
  },

  {
    path:'canned',
    component: CannedComponent
  },

  {
    path: 'userdetails',
    component: UserdetailsComponent
  },

{
  path: 'forward',
  component: ForwardComponent
}
 

];

@NgModule({
  declarations: [
    AppComponent,
    /*  Login component starts here */
    LoginComponent,
    ForgotComponent,
    ResetComponent,
    SuccessComponent,
    ForgotSuccessComponent,
    ForgotFailComponent,

    /*  Login component ends here */

    /*  Registration component starts here */
    RegisterComponent,

    /*  Registration component ends here */
    LivechatComponent,

    /*  Menu items start*/
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    /*  Menu items end*/

    /*livechat component registration */
    ChatboxComponent,
    SupportComponent,
    UserdetailsComponent,
    /* livechat ends here*/

    TicketComponent,

    /* forms starts here*/
    CloseComponent,
    CannedComponent,
    ForwardComponent
    /* forms ends here*/

  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],

    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgbModule,

  ],

  exports: [RouterModule],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

