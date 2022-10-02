import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee} from '../Employee';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  
  registerForm: FormGroup;
  submitted:boolean=false;
  id:number;
  employee: Employee = new Employee();

  constructor(private crudService: CrudService,private router:Router,
              private route:ActivatedRoute,private builder:FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.crudService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));

    this.registerForm= this.builder.group(
      {
        firstName:["",Validators.required],
        lastName:["",Validators.required],
        emailId:["",[Validators.required,Validators.email]]
      }
    );
  }

  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid)
      return;
    else{
      this.crudService.updateEmployee(this.id, this.employee).subscribe( data =>{
        this.goToEmployeeList();
      }
      , error => console.log(error));
    } 
  }
  get f(){
    return this.registerForm.controls;
  }

  goToEmployeeList(){
    this.router.navigate(['/admin']);
  }
}