import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Customer1Component } from './customer1/customer1.component';
import { Customer2Component } from './customer2/customer2.component';

import { CustomersComponent } from './customers.component';

// const routes: Routes = [
//   { path: '', component: CustomersComponent },
//   { path: 'customer1', component: Customer1Component },
//   { path: 'customer2', component: Customer2Component },
// ];
const routes: Routes = [
  {
    path: 'customer2/:id',
    component: Customer2Component,
  },
  {
    path: 'customer1/:id',
    component: Customer1Component,
  },
  {
    path: '',
    component: CustomersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
