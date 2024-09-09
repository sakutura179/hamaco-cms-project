import { Component, input, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../../shared/models/data.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrl: './employee-item.component.scss'
})
export class EmployeeItemComponent {
  user = input.required<User>();
}
