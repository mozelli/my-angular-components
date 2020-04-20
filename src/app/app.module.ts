import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { routing } from './app.routing'; // Routes
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ListComponent } from './products/list/list.component';
import { FormComponent } from './products/form/form.component';
import { CardComponent } from './components/card/card.component';

import { CategoriesModule } from './categories/categories.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ListComponent,
    FormComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    routing, //Routes
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    CategoriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
