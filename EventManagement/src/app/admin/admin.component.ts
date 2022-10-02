import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Employee } from '../Employee';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  employees:Employee[];
  constructor(private crudService:CrudService ,private router:Router ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.crudService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  add(){
    this.router.navigate(['user']);
  }
  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['edit', id]);
  }

  deleteEmployee(id: number){
    this.crudService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}