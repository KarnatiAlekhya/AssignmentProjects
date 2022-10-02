import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Employee } from '../Employee';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  registerForm: FormGroup;
  submitted:boolean=false;
  employee: Employee = new Employee();

  constructor(private crudService: CrudService,private router:Router,private builder:FormBuilder) { }

  ngOnInit(): void { 
    this.registerForm= this.builder.group(
      {
        firstName:["",Validators.required],
        lastName:["",Validators.required],
        emailId:["",[Validators.required,Validators.email]]
      }
    );
   }

  saveEmployee(){
    this.crudService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/admin']);
  }
  
  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid)
      return;
    else{
      console.log(this.employee);
      this.saveEmployee();
    }
  }
  get f(){
    return this.registerForm.controls;
  }
} 