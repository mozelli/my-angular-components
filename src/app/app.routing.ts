import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ListComponent } from './products/list/list.component';
import { FormComponent } from './products/form/form.component';

const appRoutes: Routes = [
  	{ path: '', component: ProductsComponent },
  	{ path: 'products', component: ListComponent },
  	{ path: 'products/edit/:id', component: FormComponent },
  	{ path: 'products/new', component: FormComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);