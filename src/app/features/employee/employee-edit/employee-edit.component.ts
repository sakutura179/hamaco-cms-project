import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { DepartmentService } from '../../department/department.service';
import { Department, User } from '../../../shared/models/data.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map, Observable, of } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.scss'
})
export class EmployeeEditComponent implements OnInit {
  id: number | undefined;
  editMode = false;
  selectedUser: User | undefined;
  employeeForm!: FormGroup;
  departmentService = inject(DepartmentService);
  employeeService = inject(EmployeeService);
  departments$: Observable<Department[]> = of([]);
  private destroyRef = inject(DestroyRef);

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    });

    this.departments$ = this.departmentService.getAllDepartments()
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )

    this.initForm();
  }

  private initForm() {
    let fullName = '';
    let userName = '';
    let department = 0;

    if(this.editMode && this.id) {
      console.log('edit');
      this.getEmployeeById(this.id).subscribe((user) => {
        this.selectedUser = user;
        // console.log(this.selectedUser);
        fullName = this.selectedUser?.fullname ?? '';
        userName = this.selectedUser?.username!;
        department = this.selectedUser?.department?.id ?? 1;
        console.log(fullName, userName, department);
      })
    }

    console.log(fullName, userName, department);

    this.employeeForm = new FormGroup({
      'fullname': new FormControl(fullName, Validators.required),
      'username': new FormControl(userName, Validators.required),
      'department': new FormControl(department, Validators.required)
    })
  }

  getEmployeeById(id: number): Observable<User> {
    return this.employeeService.getAllEmployees().pipe(
      map((response: User[]) => {
        const employeeArray = Object.values(response);
        return employeeArray.map((employee: any) => ({
          id: employee.id,
          username: employee.username,
          fullname: employee.fullname,
          department: employee.department
          ? { id: employee.department.id, name: employee.department.name }
          : undefined
        }))
        .find((u) => u.id === id);
      })
    )
  }
}
