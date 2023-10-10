import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPlayedComponent } from './video-played/video-played.component';
import { YaboutComponent } from './yabout/yabout.component';
import { YcontactComponent } from './ycontact/ycontact.component';
import { YhomeComponent } from './yhome/yhome.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { MyVideoComponent } from './my-video/my-video.component';

const routes: Routes = [
  {path:'', component:YhomeComponent},
  {path:'about', component:YaboutComponent},
  {path:'contact', component:YcontactComponent},
  {path:'videoplay/:id', component:VideoPlayedComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:SignupComponent},
  {path:'profile', component:ProfileComponent},
  {path:'myVideo', component:MyVideoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
