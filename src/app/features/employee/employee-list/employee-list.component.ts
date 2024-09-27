import { User } from './../../../shared/models/data.model';
import { Component, inject, OnInit, signal } from '@angular/core';
import { DUMMY_USERS } from '../../../shared/dummy-data/dummy-user';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoadingService } from '../../../shared/components/loading/loading.service';
import { DepartmentService } from '../../department/department.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // users = signal(DUMMY_USERS);
  private employeesService = inject(EmployeeService);
  private loadingService = inject(LoadingService);
  private departmentService = inject(DepartmentService);

  users = signal<User[]>([]);

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.loadingService.show();
    this.employeesService.getAllEmployees().pipe(
      map((response: any) => {
        const employeesArray = Object.values(response);
        return employeesArray.map((employee: any) => ({
          id: employee.id,
          username: employee.username,
          fullname: employee.fullname,
          role: employee.role,
          department: employee.department
          ? { id: employee.department.id, name: employee.department.name }
          : undefined
        }));
      }),
      catchError((error) => {
        console.error('Error: ', error);
        this.loadingService.hide();
        return of([]);
      })
    )
    .subscribe(
      (mappedUsers) => {
        // console.log(mappedUsers);
        this.users.set(mappedUsers);
        this.loadingService.hide();
      }
    );

    this.departmentService.getAllDepartments();
    // console.log(this.departmentService.loadDepartments());
  }

  onAddEmployee() {
    console.log('onAddEmployee');
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
