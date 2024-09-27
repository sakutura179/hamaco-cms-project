import { Injectable, signal } from "@angular/core";
import { Department } from "../../shared/models/data.model";
import { HttpClient } from "@angular/common/http";
import { map, tap, Observable } from "rxjs";
import { API_URL } from "../../shared/env/env";

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {
  constructor(private http: HttpClient) {}

  private departments = signal<Department[]>([]);

  loadDepartments = this.departments.asReadonly();

  getAllDepartments(): Observable<any> {
    return this.http.get<Department[]>(API_URL + 'departments.json').pipe(
      map((response: any) => {
        Object.values(response);
        // console.log(Object.values(response));
        return Object.values(response);
      }),
      tap((departments: any) => {
        this.departments.set(departments);
      })
    );
  }
}
