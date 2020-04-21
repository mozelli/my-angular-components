import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { FormProductsComponent } from './products/form-products/form-products.component';

import { CategoriesComponent } from './categories/categories.component';
import { FormCategoriesComponent } from './categories/form-categories/form-categories.component';
import { ListCategoriesComponent } from './categories/list/list-categories.component';

const appRoutes: Routes = [
  	{ path: 'categories/form', component: FormCategoriesComponent },
  	{ path: 'categories/form/:id', component: FormCategoriesComponent },
  	{ path: 'categories/list', component: ListCategoriesComponent },
  	
  	{ path: 'products/form', component: FormProductsComponent },
  	{ path: 'products/form/:id', component: FormProductsComponent },
  	{ path: 'products/list', component: ListProductsComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);