import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { AdminMenuComponent } from "../../shared/components/admin-menu/admin-menu.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule,
    AdminMenuComponent
  ]
})

export class DashboardModule {}
