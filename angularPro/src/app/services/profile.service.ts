import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }


  userPost(user:any){
    return this.http.post("http://localhost:3000/users/userspost",user);
   }
  
   userGet(){
    return this.http.get("http://localhost:3000/users/userget");
   }


updateProfile(id:any,updatedData:any){
  return this.http.put("http://localhost:3000/user/" +id, updatedData)
}




videoPost(video:any){
  return this.http.post("http://localhost:3000/videos", video)
}

}
