import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileService } from '../services/profile.service';
import { VideoService } from '../services/video.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';

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
Setting:boolean = false;
deletespin:boolean = false;
constructor(private PS:ProfileService, private fb: FormBuilder, private VS:VideoService, private _snack:MatSnackBar,private dialog: MatDialog, private router:Router){
  this.updateForm = this.fb.group({
    name : this.fb.control('',[Validators.required]),
    email : this.fb.control('',[Validators.required]),
    number : this.fb.control('',[Validators.required]),
    password : this.fb.control('',[Validators.required]),
  })
}

ngOnInit(): void {
  this.checkUser();
  this.themes();
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
res.forEach((update:any) => {
  let updatedUser = update ;
  
  localStorage.setItem("user", JSON.stringify( updatedUser ));
});
console.log("updateser=>>>>>>>>>",res);

this._snack.open(this.user.name,"You'r Profile Updated",{ duration:5000})
   });
},2000)
  }


 visiblePassword(){
this.visible =! this.visible;
 }


 setting(){
this.Setting =! this.Setting;
 }

 DailogClose:boolean=false;

 deleteUser(){
  this.DailogClose = false;
   this.deletespin = true;
   setTimeout(()=>{
   const userId = this.user.id;
   this.PS.deleteProfile(userId).subscribe((res:any)=>{
    this.deletespin = false;
    setTimeout(()=>{
    this.DailogClose = true;
  },2000)
    this._snack.open(this.user.name,"You'r Profile Deleted",{ duration:5000});
    localStorage.removeItem("user");
    this.router.navigateByUrl('/');
  });
},3000)
  
 }

 openDialog(dialog:any) {
  this.dialog.open(dialog,{
    width : '400px',
    height : '100px',
  
  });
}


theme:boolean =false;

darkTheme(){
this.themes();
this.theme =! this.theme;
const currentTheme = localStorage.getItem('theme');
let newTheme;
  if (currentTheme === 'dark') {
    newTheme = 'light';
    console.log("light");
    this.theme = true;
    
  } else {
    console.log("Dark");
    this.theme = false;
    newTheme = 'dark';
  }
  localStorage.setItem('theme', newTheme);

}
    
 btn:any;
  
themes(){
  let currentTheme = localStorage.getItem('theme');
   if(currentTheme == 'dark'){
     let light ='bg-dark text-light';
     this.btn = 'btn btn-light text-dark';
 this.VS.Bgtheme.next(light)
   }else{
     this.btn = 'btn btn-dark text-light';
     let dark = 'bg-light text-dark';
     this.VS.Bgtheme.next(dark)
   }
 }



}

