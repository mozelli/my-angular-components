import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from './Products/product';

@Injectable({
  	providedIn: 'root'
})
export class BarApiService {

	URL = "http://localhost:3001/api/v1";

  	constructor(private http: HttpClient) { }

  	getProduct(): Observable<Product[]> {
  		return this.http.get<Product[]>(`${this.URL}/products`);
  	}

  	addProduct(product: Product): Observable<Product> {
  		return this.http.post<Product>(`${this.URL}/products`, product);
  	}

  	deleteProduct(id: string) {
  		return this.http.delete(`${this.URL}/products/${id}`);
  	}
}
