import { DropdownChangeEvent } from 'primeng/dropdown';
import { DUMMY_DEPARTMENTS } from '../../../shared/dummy-data/dummy-department';
import { DUMMY_SOURCES } from '../../../shared/dummy-data/dummy-source';
import { DUMMY_USERS } from '../../../shared/dummy-data/dummy-user';
import { DUMMY_STATUS } from './../../../shared/dummy-data/dummy-status';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Action, SortOption, SupplyField } from '../../../shared/models/enum';
import { Sort } from '../../../shared/models/data.model';

@Component({
  selector: 'app-supply-header',
  templateUrl: './supply-header.component.html',
  styleUrl: './supply-header.component.scss'
})
export class SupplyHeaderComponent implements OnInit {
  @Output() filterChanged = new EventEmitter<{
    action: string,
    field: string,
    value: number | string
  }>()

  startDate: Date | undefined;
  endDate: Date | undefined;
  statusId: number | undefined;
  departmentId: number | undefined;
  creatorId: number | undefined;
  sourceId: number | undefined;
  sortId: string | undefined;
  statuses = [{ id: 0, name: 'Tất cả' }, ... DUMMY_STATUS];
  departments = [{ id: 0, name: 'Tất cả' }, ... DUMMY_DEPARTMENTS];
  users = [{ id: 0, fullname: 'Tất cả' }, ... DUMMY_USERS.filter(user => user.role === 'user')];
  sources = [{ id: 0, name: 'Tất cả' }, ... DUMMY_SOURCES];
  supplyField = SupplyField;
  actions = Action;
  sortOptions: Sort[] = [
    {
      id: SortOption.ASC,
      name: 'Tăng dần'
    },
    {
      id: SortOption.DESC,
      name: 'Giảm dần'
    }
  ]

  ngOnInit(): void {
    const now = new Date();
    this.startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }

  onFilterItemChanged(action: string, event: DropdownChangeEvent, field: string) {
    const params = {
      action,
      field,
      value: event.value
    }
    this.filterChanged.emit(params);
  }
}
