import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileService } from '../services/profile.service';
import { VideoService } from '../services/video.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  updateForm:FormGroup;
  visible:boolean = false;
  spin:boolean = false;

constructor(private PS:ProfileService, private fb: FormBuilder, private VS:VideoService, private _snack:MatSnackBar){
  this.updateForm = this.fb.group({
    name : this.fb.control('',[Validators.required]),
    email : this.fb.control('',[Validators.required]),
    number : this.fb.control('',[Validators.required]),
    password : this.fb.control('',[Validators.required]),
  })
}

ngOnInit(): void {
  this.checkUser();
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
    
 
 updateUser(){
 this.spin = true;
 setTimeout(()=>{
  const userId = this.user.id;
   const updatedUser = this.updateForm.value;
   this.PS.updateProfile(userId,updatedUser).subscribe((res:any)=>{
this.spin = false;
localStorage.setItem("user", JSON.stringify( res ));
this._snack.open(this.user.name,"You'r Profile Updated",{ duration:5000})
   });
},2000)
  }


 visiblePassword(){
this.visible =! this.visible;
 }

}
