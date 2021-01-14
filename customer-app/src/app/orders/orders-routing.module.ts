import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Order1Component } from './order1/order1.component';
import { Order2Component } from './order2/order2.component';

import { OrdersComponent } from './orders.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
  },
  {
    path: 'order1/:id',
    component: Order1Component,
  },
  {
    path: 'order2/:id',
    component: Order2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
