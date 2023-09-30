import { Component } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm : FormGroup;

  constructor(private fb : FormBuilder, private VS:VideoService){
    this.loginForm = this.fb.group({
      email :  this.fb.control('',[Validators.required]),
      password :  this.fb.control('',[Validators.required])
    })
  }

  Login(){
    const User = this.loginForm.value;
    this.VS.userGet().subscribe((res:any)=>{
const userFind = res.find((u:any)=>{
  return u.email === User.email && u.password === User.password ;
});
if(userFind){
  console.log("find");
  
}else{
  console.log("not found");
  
}

  });
}
}
