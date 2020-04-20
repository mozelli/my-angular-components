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

  addCategory(category): Observable<Category> {
    return this.httpClient.post<Category>(`${this.API}categories`, category).pipe(take(1)) ;
  }

  getCategories(): Observable<Category[]> {
  	return this.httpClient.get<Category[]>(`${this.API}categories`);
  }

  showCategory(id): Observable<Category> {
    return this.httpClient.get<Category>(`${this.API}categories/${id}`);
  }

  editCategory(category: Category): Observable<Category> {
    return this.httpClient.put<Category>(`${this.API}categories/${category.id}`, category);
  }

  deleteCategory(id: number) {
    return this.httpClient.delete(`${this.API}categories/${id}`);
  }

}
