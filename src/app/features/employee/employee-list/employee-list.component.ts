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
    this.employeesService.getAllEmployees()
    .subscribe(
      (mappedUsers) => {
        this.users.set(mappedUsers);
        this.loadingService.hide();
      }
    );

    this.departmentService.getAllDepartments();
  }

  onAddEmployee() {
    console.log('onAddEmployee');
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
