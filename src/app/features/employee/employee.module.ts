import { NgModule } from "@angular/core";
import { EmployeeComponent } from "./employee.component";
import { EmployeeRoutingModule } from "./employee-routing.module";
import { AdminMenuComponent } from "../../shared/components/admin-menu/admin-menu.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeItemComponent } from "./employee-item/employee-item.component";

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeItemComponent
  ],
  imports: [
    EmployeeRoutingModule,
    AdminMenuComponent,
  ]
})

export class EmployeeModule { }
