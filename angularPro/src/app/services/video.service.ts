import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  loggedUser = new EventEmitter<any>();
  videoId  = new  EventEmitter<any>();
  Bgtheme = new EventEmitter<any>();
  constructor( private http:HttpClient) { }

  getVideo(){
    return this.http.get("https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json")
  }

  getVideosById(id:any) {
    return this.http.get("https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json"+id);
   }

   userPost(user:any){
    return this.http.post("http://localhost:3000/user",user);
   }

   userGet(){
    return this.http.get("http://localhost:3000/user");
   }



   
  
}
