import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesComponent } from './categories.component';
import { ListCategoriesComponent } from './list/list-categories.component';

@NgModule({
  declarations: [
  	CategoriesComponent,
  	ListCategoriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  	CategoriesComponent
  ]
})
export class CategoriesModule { }
