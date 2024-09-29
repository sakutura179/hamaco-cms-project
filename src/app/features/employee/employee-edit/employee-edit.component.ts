import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Department, User } from '../../../shared/models/data.model';
import { DepartmentService } from '../../department/department.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.scss',
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = !!this.id;

      this.initForm();
    });

    this.departments$ = this.departmentService
      .getAllDepartments()
      .pipe(takeUntilDestroyed(this.destroyRef));
  }

  private initForm() {
    let fullName = '';
    let userName = '';
    let department = 0;

    this.employeeForm = new FormGroup({
      fullname: new FormControl(fullName, Validators.required),
      username: new FormControl(userName, Validators.required),
      department: new FormControl(department, Validators.required),
    });

    if (this.editMode && this.id) {
      console.log('edit');
      this.getEmployeeById(this.id).subscribe((user) => {
        this.selectedUser = user;
        // console.log(this.selectedUser);
        fullName = this.selectedUser?.fullname ?? '';
        userName = this.selectedUser?.username ?? '';
        department = this.selectedUser?.department?.id ?? 1;
        console.log(fullName, userName, department);

        this.employeeForm.get('fullname')?.setValue(fullName);
        this.employeeForm.get('username')?.setValue(userName);
        this.employeeForm.get('department')?.setValue(department);
      });
    }
  }

  private getEmployeeById(id: number): Observable<User | undefined> {
    return this.employeeService.getAllEmployees().pipe(
      map((employeeArray: User[]) => {
        return employeeArray.find((employee) => employee.id === id);
      })
    );
  }

  onSubmit() {
    const formValue = this.employeeForm.value;
    let userDepartment: Department | undefined;
    this.departments$.subscribe((departments) => {
      userDepartment = departments.find((department) => department.id == formValue['department']);
      const newEmployee: User = {
        id: (this.editMode && this.id) ? this.id : 0,
        username: formValue['username'],
        fullname: formValue['fullname'],
        role: 'user',
        department: userDepartment
      }

      if(this.editMode && this.id) {
        this.employeeService.updateEmployee(this.id, newEmployee);
      } else {
        this.employeeService.addEmployee(newEmployee);
      }

      this.employeeForm.reset();
    });
  }

  isFormChanged(): boolean {
    return this.employeeForm.dirty;
  }
}
