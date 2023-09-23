import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-yaffiliate',
  templateUrl: './yaffiliate.component.html',
  styleUrls: ['./yaffiliate.component.css']
})
export class YaffiliateComponent implements OnInit {
  affiliateVideo:any;

constructor(private VS:VideoService, private router:Router){}

ngOnInit(){
  this.getAffiliateVideo();
 }

 videoID(id:any){
   this.VS.videoId.next(id);
this.router.navigate(['/videoplay/',id]);
 }

 getAffiliateVideo(){
   this.VS.getVideo().subscribe((res:any)=>{
     this.affiliateVideo = res;
   })
 }

}
