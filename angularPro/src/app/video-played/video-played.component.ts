import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-played',
  templateUrl: './video-played.component.html',
  styleUrls: ['./video-played.component.css']
})
export class VideoPlayedComponent implements OnInit  {
  replyBox: boolean[] = [];
  videoBox: any;
  videoUrl: string;
  id: any;

  constructor(private VS: VideoService, private route: ActivatedRoute) {
    this.videoPlayBySuggested();
    this.videoPlayByRoute();
  }



  ngOnInit() {
    this.videoPlayBySuggested();
    this.videoPlayByRoute();
  }

  

 


  replyOn(index: any) {
    this.replyBox[index] = !this.replyBox[index];
  }

  
  videoPlayBySuggested() {

    this.VS.videoId.subscribe((res: any) => {
      this.id = res;
      console.log(this.id);
      this.VS.getVideo().subscribe((res: any) => {
        console.log(res, "res");

        const video = res.find((id: any) => {
          return id.id == this.id;
        })
        if (video) {
          console.log("find");
          this.videoBox = video;
          this.videoUrl = this.videoBox.videoUrl ;
          console.log(this.videoBox.videoUrl, "videobox");

        } else {

          console.log("not found");
        }

      });
    })
  }


  videoPlayByRoute() {


    this.id = this.route.snapshot.paramMap.get('id');

    this.VS.getVideo().subscribe((res: any) => {
      console.log(res, "res");

      const video = res.find((id: any) => {
        return id.id == this.id;
      })
      if (video) {
        console.log("find");
        this.videoBox = video;
        this.videoUrl = this.videoBox.videoUrl ;
        console.log(this.videoUrl, "videoboxUrl");

      } else {

        console.log("not found");
      }

    });
    console.log(this.id, "idddd");

  }


}
