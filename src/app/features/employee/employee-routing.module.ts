import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeComponent } from "./employee.component";
import { InitViewComponent } from "../../shared/components/init-view/init-view.component";
import { EmployeeEditComponent } from "./employee-edit/employee-edit.component";
import { canDeactiveEditEmployeeComponent } from "./employee-edit/can-deactivate.guard";

const routes: Routes = [
 {
  path: '',
  component: EmployeeComponent,
  children: [
    {
      path: '',
      component: InitViewComponent,
      data: {
        title: 'nhân viên'
      }
    },
    {
      path: 'new',
      component: EmployeeEditComponent,
      canDeactivate: [canDeactiveEditEmployeeComponent]
    },
    {
      path: ':id/edit',
      component: EmployeeEditComponent,
      canDeactivate: [canDeactiveEditEmployeeComponent]
    }
  ]
 }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EmployeeRoutingModule { }
