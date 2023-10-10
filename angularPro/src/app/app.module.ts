import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YheaderComponent } from './yheader/yheader.component';
import { YfooterComponent } from './yfooter/yfooter.component';
import { YhomeComponent } from './yhome/yhome.component';
import { YaboutComponent } from './yabout/yabout.component';
import { YcontactComponent } from './ycontact/ycontact.component';
import { HttpClientModule } from '@angular/common/http';
import { YaffiliateComponent } from './yaffiliate/yaffiliate.component';
import { VideoPlayedComponent } from './video-played/video-played.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProfileComponent } from './profile/profile.component';
import { MyVideoComponent } from './my-video/my-video.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'


@NgModule({
  declarations: [
    AppComponent,
    YheaderComponent,
    YfooterComponent,
    YhomeComponent,
    YaboutComponent,
    YcontactComponent,
    YaffiliateComponent,
    VideoPlayedComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    MyVideoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule ,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
