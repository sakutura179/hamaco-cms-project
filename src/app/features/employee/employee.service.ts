import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { API_URL } from '../../shared/env/env';
import { User, UserResponse } from '../../shared/models/data.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  private allEmployees: User[] = [];

  getAllEmployees(): Observable<User[]> {
    return this.http.get<UserResponse>(API_URL + 'employees.json').pipe(
      map((userResponse: UserResponse) => {
        this.allEmployees = Object.values(userResponse);
        return this.allEmployees;
      })
    );
  }

  addEmployee(employee: User) {
    employee.id = this.allEmployees.length + 1;
    this.allEmployees.push(employee);
    this.updateEmployeeList(this.allEmployees).subscribe();
  }

  updateEmployee(id: number, employee: User) {
    this.allEmployees[id-1] = employee;
    this.updateEmployeeList(this.allEmployees).subscribe();
  }

  updateEmployeeList(users: User[]): Observable<User[]> {
    return this.http.put<UserResponse>(API_URL + 'employees.json', users)
    .pipe(
      map((userResponse: UserResponse) => {
        return Object.values(userResponse);
      })
    )
  }
}
