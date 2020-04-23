import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/Operators';
import { environment } from '../../environments/environment';

import { Product } from './Product';
import { Category } from '../categories/Category';

@Injectable({
  	providedIn: 'root'
})
export class ProductsService {

	private readonly API = environment.API;

  	constructor(private http: HttpClient) { }

  	addProduct(product: Product): Observable<Product> {
      return this.http.post<Product>(`${this.API}categories/${product.categories_id}/products`, product).pipe(take(1)) ;
    }

    getProductsByCategoryId(categories_id: number): Observable<Product[]> {
      return this.http.get<Product[]>(`${this.API}categories/${categories_id}/products`) ;
    }
    
    getProducts(): Observable<Category[]> {
  		return this.http.get<Category[]>(`${this.API}categories/products`);
  	}

    showProduct(id: any) {
      return this.http.get(`${this.API}products/${id}`);
    }

  	deleteProduct(id: string) {
  		return this.http.delete(`${this.API}products/${id}`);
  	}
}
