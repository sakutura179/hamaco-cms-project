import { NgModule } from "@angular/core";
import { ProductComponent } from "./product.component";
import { ProductRoutingModule } from "./product-routing.module";
import { AdminMenuComponent } from "../../shared/components/admin-menu/admin-menu.component";

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    ProductRoutingModule,
    AdminMenuComponent
  ]
})

export class ProductModule { }
