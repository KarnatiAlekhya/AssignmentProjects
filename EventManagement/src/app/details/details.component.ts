import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Employee } from '../Employee';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number
  employee: Employee

  constructor(private route:ActivatedRoute, private crudService:CrudService,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.crudService.getEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    });
  }
  goBack(){
    this.router.navigate(['admin']);
  }

  updateEmployee(id: number){
    this.router.navigate(['edit', id]);
  }

  deleteEmployee(id: number){
    this.crudService.deleteEmployee(id).subscribe( data => {
      alert("Employee data deleted");
      this.router.navigate(['admin']);
    })

}
}
