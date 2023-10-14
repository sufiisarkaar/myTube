import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../services/profile.service';
import { VideoService } from '../services/video.service';
import * as uuid from 'uuid';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-my-video',
  templateUrl: './my-video.component.html',
  styleUrls: ['./my-video.component.css']
})
export class MyVideoComponent implements OnInit {
  videoPostForm:FormGroup;
  user:any;
  spin:boolean=false;
  videoBox:any[] = [];

  constructor(private PS:ProfileService, private FB:FormBuilder, private VS:VideoService, private _snack:MatSnackBar){
    this.videoPostForm = this.FB.group({
      title : this.FB.control('',[Validators.required]),
      thumbnailUrl : this.FB.control('',[Validators.required]),
      duration : this.FB.control('',[Validators.required]),
      uploadTime : this.FB.control(Date(),[Validators.required]),
      views : this.FB.control('',[Validators.required]),
      author : this.FB.control('',[Validators.required]),
      videoUrl : this.FB.control('',[Validators.required]),
      description : this.FB.control('',[Validators.required]),
      subscriber : this.FB.control('',[Validators.required]),
      isLive : this.FB.control(true,[Validators.required]),
    })
  }


  ngOnInit(): void {
    this.checkUser();
    this.getVideoByUser();
  }
    

  checkUser() {
    const user = localStorage.getItem("user");
    const userFind = user && JSON.parse(user);
    if (userFind) {
      this.user = userFind
      this.VS.loggedUser.next(true)
    } else {
      this.VS.loggedUser.next(false)
    }
  }


  postVideo(){
    this.spin = true;
    setTimeout(() => {
    const id = uuid.v4();
    const userId = this.user.id;
    const video = {
...this.videoPostForm.value,
id,
userId
    }
    this.PS.videoPost(video).subscribe((res:any)=>{
this.spin = false;
this.getVideoByUser();
this._snack.open("Video uploaded success","close",{ duration: 5000})
    },(err)=>{
      this.spin = false;
      this._snack.open( "Something went wrong", "",{ duration : 5000});
  
    });
      
  }, 3000);
  }


  getVideoByUser(){
    this.VS.getVideo().subscribe((res:any)=>{
const filterVideos = res.filter((video:any)=>{
  return video.userId === this.user.id;
});
if(filterVideos){
  this.videoBox = filterVideos;
}
    })
  }

}
