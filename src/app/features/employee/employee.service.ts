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

  getAllEmployees(): Observable<User[]> {
    return this.http.get<UserResponse>(API_URL + 'employees.json').pipe(
      map((userResponse: UserResponse) => {
        return Object.values(userResponse);
      })
    );
  }

  addEmployee(employee: User) {
    console.log(employee);
  }
}
