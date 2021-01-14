import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { Customer1Component } from './customer1/customer1.component';
import { Customer2Component } from './customer2/customer2.component';


@NgModule({
  declarations: [CustomersComponent, Customer1Component, Customer2Component],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
