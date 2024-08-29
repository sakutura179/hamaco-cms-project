import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SupplyComponent } from "./supply.component";

const routes: Routes = [
  {
    path: '',
    component: SupplyComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SupplyRoutingModule {

}
