import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/Operators';
import { environment } from '../environments/environment';

import { Product } from './Products/product';

@Injectable({
  	providedIn: 'root'
})
export class BarApiService {

	private readonly URL = environment.API;

  	constructor(private http: HttpClient) { }

  	getProducts(): Observable<Product[]> {
  		return this.http.get<Product[]>(`${this.URL}/products`);
  	}

    showProduct(id: any) {
      return this.http.get(`${this.URL}/products/${id}`);
    }

  	addProduct(product: Product): Observable<Product> {
  		return this.http.post<Product>(`${this.URL}/products`, product).pipe(take(1)) ;
  	}

  	deleteProduct(id: string) {
  		return this.http.delete(`${this.URL}/products/${id}`);
  	}
}
