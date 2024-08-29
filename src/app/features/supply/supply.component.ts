import { DUMMY_USERS } from './../../shared/dummy-data/dummy-user';
import { DUMMY_DEPARTMENTS } from './../../shared/dummy-data/dummy-department';
import { Component, signal } from '@angular/core';
import { DUMMY_SUPPLIES } from '../../shared/dummy-data/dummy-supply';
import { Action, SupplyField, SortOption } from '../../shared/models/enum';
import { Department, Source, Status, Supply, User } from '../../shared/models/data.model';
import { DUMMY_STATUS } from '../../shared/dummy-data/dummy-status';
import { DUMMY_SOURCES } from '../../shared/dummy-data/dummy-source';

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrl: './supply.component.scss'
})
export class SupplyComponent {
  supplies = signal(DUMMY_SUPPLIES);
  selectedStatus: Status | undefined;
  selectedDepartment: Department | undefined;
  selectedCreator: User | undefined;
  selectedSource: Source | undefined;
  filteredSupplies!: Supply[];
  isOriginalList = true;

  onCriteriaChanged(event: any) {
    if(event.action === Action.FILTER) {
      this.handleFilterAction(event);
    } else {
      this.handleSortAction(event);
    }
  }

  // Sort functions
  private handleSortAction(event: any): void {
    console.log(event);
      if(this.isOriginalList) {
        this.onSuppliesAmountSort(this.supplies(), event.value);
      } else {
        this.onSuppliesAmountSort(this.filteredSupplies, event.value);
      }
  }

  private onSuppliesAmountSort(list: Supply[], type: string) {
    var result: Supply[] = [];
    if(type === SortOption.ASC) {
      result = list.sort((a, b) => {
        return a.amount - b.amount;
      });
    } else {
      result = list.sort((a, b) => {
        return b.amount - a.amount;
      });
    }

    this.supplies.set(result);
  }

  // Filter functions
  private handleFilterAction(event: any): void {
    this.isOriginalList = false;
      this.getSelectedCriteria(event);

      this.filteredSupplies = DUMMY_SUPPLIES.filter(supply => {
        return (
          (!this.selectedStatus || supply.status.id === this.selectedStatus.id) &&
          (!this.selectedDepartment || supply.department.id === this.selectedDepartment.id) &&
          (!this.selectedCreator || supply.creator.id === this.selectedCreator.id) &&
          (!this.selectedSource || supply.source.id === this.selectedSource.id)
        );
      });
      this.supplies.set(this.filteredSupplies);
  }

  private getSelectedCriteria(event: any): void {
    switch(event.field) {
      case SupplyField.STATUS: {
        if(event.value !== 0) {
          this.selectedStatus = DUMMY_STATUS.find((status) => status.id === event.value);
        } else {
          this.selectedStatus = undefined;
        }
        break;
      }
      case SupplyField.DEPARTMENT: {
        if(event.value !== 0) {
          this.selectedDepartment = DUMMY_DEPARTMENTS.find((department) => department.id === event.value);
        } else {
          this.selectedDepartment = undefined;
        }
        break;
      }
      case SupplyField.CREATOR: {
        if(event.value !== 0) {
          this.selectedCreator = DUMMY_USERS.find((user) => user.id === event.value);
        } else {
          this.selectedCreator = undefined;
        }
        break;
      }
      case SupplyField.SOURCE: {
        if(event.value !== 0) {
          this.selectedSource = DUMMY_SOURCES.find((source) => source.id === event.value);
        } else {
          this.selectedSource = undefined;
        }
        break;
      }
    }
  }
}
