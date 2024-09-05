import { NgModule } from "@angular/core";
import { EmployeeComponent } from "./employee.component";
import { EmployeeRoutingModule } from "./employee-routing.module";
import { AdminMenuComponent } from "../../shared/components/admin-menu/admin-menu.component";

@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    EmployeeRoutingModule,
    AdminMenuComponent
  ]
})

export class EmployeeModule { }
