import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { FormProductsComponent } from './form-products/form-products.component';
import { routing } from '../app.routing';

@NgModule({
  declarations: [
  	ProductsComponent,
  	ListProductsComponent,
    FormProductsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing
  ],
  exports: [
  	ProductsComponent
  ]
})
export class ProductsModule { }
