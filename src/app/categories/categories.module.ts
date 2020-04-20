import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriesComponent } from './categories.component';
import { ListCategoriesComponent } from './list/list-categories.component';
import { FormCategoriesComponent } from './form-categories/form-categories.component';
import { routing } from '../app.routing';

@NgModule({
  declarations: [
  	CategoriesComponent,
  	ListCategoriesComponent,
    FormCategoriesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing
  ],
  exports: [
  	CategoriesComponent
  ]
})
export class CategoriesModule { }
