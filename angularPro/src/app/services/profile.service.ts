import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

updateProfile(id:any,updatedData:any){
  return this.http.put("http://localhost:3000/user/" +id, updatedData)
}

videoPost(video:any){
  return this.http.post("http://localhost:3000/videos", video)
}

}
