import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './products/list/list.component';
import { FormComponent } from './products/form/form.component';

const appRoutes: Routes = [
  	{ path: '', component: ListComponent },
  	{ path: 'product/delete/:id', component: ListComponent },
  	{ path: 'product/edit/:id', component: ListComponent },
  	{ path: 'product/new', component: FormComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);