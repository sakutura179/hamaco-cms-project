import { NgModule } from "@angular/core";
import { EmployeeComponent } from "./employee.component";
import { EmployeeRoutingModule } from "./employee-routing.module";
import { AdminMenuComponent } from "../../shared/components/admin-menu/admin-menu.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeItemComponent } from "./employee-item/employee-item.component";
import { LoadingComponent } from "../../shared/components/loading/loading.component";
import { EmployeeEditComponent } from "./employee-edit/employee-edit.component";
import { AsyncPipe } from "@angular/common";
import { InputComponent } from "../../shared/components/input/input.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeItemComponent,
    EmployeeEditComponent
  ],
  imports: [
    EmployeeRoutingModule,
    AdminMenuComponent,
    LoadingComponent,
    AsyncPipe,
    InputComponent,
    ReactiveFormsModule,
    DropdownModule
  ]
})

export class EmployeeModule { }
