import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from '../../../shared/dummy-data/dummy-user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  users = signal(DUMMY_USERS);

  onAddEmployee() {
    console.log('onAddEmployee');
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
