import { Component, Input } from '@angular/core';
import { Supply } from '../../../shared/models/data.model';

@Component({
  selector: 'app-supply-list',
  templateUrl: './supply-list.component.html',
  styleUrl: './supply-list.component.scss'
})
export class SupplyListComponent {
  @Input({ required: true }) supplies!: Supply[];
}
