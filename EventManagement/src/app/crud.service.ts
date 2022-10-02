import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Employee } from './Employee';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  apiURL: string = 'http://localhost:3000/employees';

  getEmployeesList(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.http.post(`${this.apiURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.apiURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.http.put(`${this.apiURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}