import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { VideoService } from '../services/video.service';
import { SearchService } from '../services/search.service';
import { Router, NavigationStart, Event as NavigationEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-yhome',
  templateUrl: './yhome.component.html',
  styleUrls: ['./yhome.component.css']
})
export class YhomeComponent implements OnInit {
  videoBox: any;

  searchResults: any[] = [];
  showVideoSection: boolean;

  constructor(private VS: VideoService,private searchService: SearchService, private router:Router) { }



  ngOnInit(): void {
    this.getVideos();
    this.checkUser();
  }


  getVideos() {
    this.VS.getVideo().subscribe((res: any) => {
      this.videoBox = res;
      console.log(this.videoBox.videoUrl, "videobox");


    })
  }


  checkUser(){
    const getLocalUser = JSON.parse( localStorage.getItem("user") );
    if(getLocalUser){
    this.VS.loggedUser.next(true)
    }else{
      this.VS.loggedUser.next(false)
    }
}

}
