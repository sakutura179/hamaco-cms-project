import { NgModule } from "@angular/core";
import { DepartmentComponent } from "./department.component";
import { DepartmentRoutingModule } from "./department-routing.module";
import { AdminMenuComponent } from "../../shared/components/admin-menu/admin-menu.component";

@NgModule({
  declarations: [
    DepartmentComponent
  ],
   imports: [
    DepartmentRoutingModule,
    AdminMenuComponent
   ]
})

export class DepartmentModule {}
