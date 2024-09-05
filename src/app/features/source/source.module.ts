import { NgModule } from "@angular/core";
import { SourceComponent } from "./source.component";
import { SourceRoutingModule } from "./source-routing.module";
import { AdminMenuComponent } from "../../shared/components/admin-menu/admin-menu.component";

@NgModule({
  declarations: [
    SourceComponent
  ],
  imports: [
    SourceRoutingModule,
    AdminMenuComponent
  ]
})

export class SourceModule { }
