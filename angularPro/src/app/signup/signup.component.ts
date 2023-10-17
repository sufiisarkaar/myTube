import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as uuid from 'uuid';
import { ProfileService } from '../services/profile.service';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signUpForm:FormGroup;
  spin:boolean = false;

  constructor(private route:Router, private fb:FormBuilder, private VS:VideoService, private _snackBar: MatSnackBar , private PS:ProfileService
    ){
    this.signUpForm = this.fb.group({
      name : this.fb.control('',[Validators.required]),
      number :  this.fb.control('',[Validators.required]),
      email : this.fb.control('',[Validators.required]),
      password : this.fb.control('',[Validators.required])
    })
  }

  register(){
    this.spin = true;
    setTimeout(() => {
    //  const id = uuid.v4();
const User = this.signUpForm.value;
     this.PS.userPost(User).subscribe((res:any)=>{
   this.spin = false;
    this.route.navigateByUrl('/login');
    this._snackBar.open( res.Success, "",{ duration : 5000});
  },(err)=>{
    this.spin = false;
    this._snackBar.open( "Invalid Credentials", "",{ duration : 5000});

  });
}, 3000);
  }

  login(){
    this.route.navigateByUrl('/login');
  }

}
