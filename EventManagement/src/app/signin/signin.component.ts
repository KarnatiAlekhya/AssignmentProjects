import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  registerForm: FormGroup;
  submitted:boolean=false;
  constructor(private builder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.registerForm= this.builder.group(
      {
        email:["",[Validators.required,Validators.email]],
        password:["",[Validators.required,Validators.minLength(5)]]
      }
    );
  }
  OnSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid)
      return;
    else
    {
    const email:any = document.getElementById('email') as HTMLInputElement | null;
    let password:any = document.getElementById('password') as HTMLInputElement | null;
    if(email.value=="alekhya@gmail.com" && password.value=="alekhya@07")
    {
      this.router.navigate(['/admin']);
    }
    else{
      alert("Wrong email or password");
    this.router.navigate(['/signin']);
    }
    }
  }

  get f(){
    return this.registerForm.controls;
  }
  check(){
    
  }
}