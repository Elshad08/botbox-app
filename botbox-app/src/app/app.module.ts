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
import { NavbarComponent } from './Livechat/navbar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent,
    ResetComponent,
    SuccessComponent,
    ForgotSuccessComponent,
    ForgotFailComponent,
    RegisterComponent,

    LivechatComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
