import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../../shared/models/data.model";
import { Observable } from "rxjs";
import { API_URL } from "../../shared/env/env";

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<any> {
    return this.http.get<User[]>(API_URL + 'employees.json');
  }

  addEmployee(employee: User) {
    console.log(employee);
  }
}
