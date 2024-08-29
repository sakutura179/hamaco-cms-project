import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { SupplyComponent } from "./supply.component";
import { SupplyRoutingModule } from "./supply-routing.module";
import { SupplyHeaderComponent } from "./supply-header/supply-header.component";
import { TableModule } from 'primeng/table';
import { SupplyListComponent } from "./supply-list/supply-list.component";
import { DatePipe, DecimalPipe } from "@angular/common";
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    SupplyComponent,
    SupplyHeaderComponent,
    SupplyListComponent
  ],
  imports: [
    FormsModule,
    SupplyRoutingModule,
    TableModule,
    DatePipe,
    DecimalPipe,
    CalendarModule,
    DropdownModule
  ],
})

export class SupplyModule { }
