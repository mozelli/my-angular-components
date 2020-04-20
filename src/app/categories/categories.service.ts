import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/Operators';
import { environment } from '../../environments/environment';

import { Category } from '../categories/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

	private readonly API: string = `${environment.API}`;

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<Category[]> {
  	return this.httpClient.get<Category[]>(`${this.API}categories`);
  }

  deleteCategory(id: number) {
    return this.httpClient.delete(`${this.API}categories/${id}`);
  }

  /*
	showProduct(id: any) {
      return this.http.get(`${this.URL}/products/${id}`);
    }

  	addProduct(product: Product): Observable<Product> {
  		return this.http.post<Product>(`${this.URL}/products`, product).pipe(take(1)) ;
  	}
  */
}
