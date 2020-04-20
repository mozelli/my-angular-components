import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ListComponent } from './products/list/list.component';
import { FormComponent } from './products/form/form.component';

import { CategoriesComponent } from './categories/categories.component';
import { FormCategoriesComponent } from './categories/form-categories/form-categories.component';
import { ListCategoriesComponent } from './categories/list/list-categories.component';

const appRoutes: Routes = [
  	{ path: 'categories/form', component: FormCategoriesComponent },
  	{ path: 'categories/form/:id', component: FormCategoriesComponent },
  	{ path: 'categories/list', component: ListCategoriesComponent },
  	{ path: 'products', component: ListComponent },
  	{ path: 'products/edit/:id', component: FormComponent },
  	{ path: 'products/new', component: FormComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);