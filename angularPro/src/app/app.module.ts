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
import { VideoPlayedComponent } from './video-played/video-played.component'

@NgModule({
  declarations: [
    AppComponent,
    YheaderComponent,
    YfooterComponent,
    YhomeComponent,
    YaboutComponent,
    YcontactComponent,
    YaffiliateComponent,
    VideoPlayedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
