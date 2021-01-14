import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { Order1Component } from './order1/order1.component';
import { Order2Component } from './order2/order2.component';


@NgModule({
  declarations: [OrdersComponent, Order1Component, Order2Component],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
