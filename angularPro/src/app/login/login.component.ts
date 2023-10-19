import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../services/profile.service';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  spin:boolean = false;

  constructor(private fb : FormBuilder, private VS:VideoService, private route:Router,private _snackBar: MatSnackBar, private PS:ProfileService){
    this.loginForm = this.fb.group({
      email :  this.fb.control('',[Validators.required]),
      password :  this.fb.control('',[Validators.required])
    })
  }

  ngOnInit(): void {
    const getLocalUser = JSON.parse( localStorage.getItem("user") );
    if(getLocalUser){
    this.VS.loggedUser.next(true)
    }else{
      this.VS.loggedUser.next(false)
    }
    
  }

  Login(){
    this.spin = true;
    setTimeout(()=>{
    const User = this.loginForm.value;
    this.PS.userGet().subscribe((res:any)=>{
      console.log(res,"<======login");
      this.spin = false;
      
const userFind = res.find((u:any)=>{
  return u.email === User.email && u.password === User.password ;
});
if(userFind){
  console.log("find");
  localStorage.setItem("user", JSON.stringify( userFind ) );
  this.route.navigateByUrl('/');
  const getLocalUser = JSON.parse( localStorage.getItem("user") );
  if(getLocalUser){
  this.VS.loggedUser.next(true)
  }else{
    this.spin = false;

    this.VS.loggedUser.next(false)
  }
  this._snackBar.open( "You have logged in with" ,  getLocalUser.email, {  duration: 5000} );
}else{
  console.log("not found");
  
}

  },(err)=>{
    this.spin = false;
    this._snackBar.open( "Invalid Credentials", "",{ duration : 5000});

  });
},3000)
}

register(){
  this.route.navigateByUrl('/register');
}
}
