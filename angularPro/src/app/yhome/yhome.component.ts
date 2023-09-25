import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { VideoService } from '../services/video.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-yhome',
  templateUrl: './yhome.component.html',
  styleUrls: ['./yhome.component.css']
})
export class YhomeComponent implements OnInit {
  videoBox: any;

  searchResults: any[] = [];

  constructor(private VS: VideoService,private searchService: SearchService) { }



  ngOnInit(): void {
    this.getVideos();


  }


  getVideos() {
    this.VS.getVideo().subscribe((res: any) => {
      this.videoBox = res;
      console.log(this.videoBox.videoUrl, "videobox");


    })
  }

}
