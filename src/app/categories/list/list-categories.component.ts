import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { CategoriesService } from '../categories.service';
import { Category } from '../Category';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

	categories: Observable<Category[]>;

  constructor(
  	private categoriesService: CategoriesService
  	) { }

  ngOnInit(): void {
  	this.onRefresh();
  }

  onRefresh() {
  	this.categories = this.categoriesService.getCategories();	
  }

  onEdit(id: number) {
  	console.log(id);
  }

  onDelete(category: Category) {
    let result: boolean;

    result = confirm(`Atenção! A categoria "${category.name}" e todos os seus produtos serão excluídos. Deseja realmente continuar?`);

    if (result) {
      this.categoriesService.deleteCategory(category.id).subscribe((result) => {
        if (result) {
          this.onRefresh();
        }
      });
    }
  }

}
