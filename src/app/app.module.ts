import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';


// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyAIDIENgEL14c_mLv2nVzNkRuZeX77XLBE",
    authDomain: "cocoonpredev.firebaseapp.com",
    databaseURL: "https://cocoonpredev.firebaseio.com",
    projectId: "cocoonpredev",
    storageBucket: "cocoonpredev.appspot.com",
    messagingSenderId: "463065205424"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
