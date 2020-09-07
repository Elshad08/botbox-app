import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterComponent } from './Registration/register.component';

import { LoginComponent } from './Login/login.component';
import { ForgotComponent } from './Login/forgot.component';
import { ResetComponent } from './Login/reset.component';
import { SuccessComponent } from './Login/success.component';
import { ForgotSuccessComponent } from './Login/fgSuccess.component';
import { ForgotFailComponent } from './Login/fgfail.component';

import { LivechatComponent } from './Livechat/livechat.component';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './Menu/navbar.component';
import { DashboardComponent } from './Forms/dashboard.component';
import { ChatboxComponent } from './Livechat/chatbox.component';
import { SupportComponent } from './Livechat/support.component';
import { UserdetailsComponent } from './Livechat/userdetails.component';
import { SidebarComponent } from './Menu/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
