import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


import { ProductsService } from '../products.service';
import { Product } from '../Product';
import { CategoriesService } from '../../categories/categories.service';
import { Category } from '../../categories/Category';

import { AlertModalService } from '../../shared/alert-modal.service';


@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrls: ['./form-products.component.css']
})
export class FormProductsComponent implements OnInit {

	formProduct: FormGroup;
  submitted: boolean = false;
  categories: Category[];

  constructor(
  	private formBuilder: FormBuilder,
  	private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private alertModalService: AlertModalService,
  ) { }

  ngOnInit(): void {
    this.formProduct = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(3)]],
      categories_id: [null, [Validators.required]]
    });

    /*this.route.params.subscribe((params) => {
      const id: any = params['id'];
      const product$ = this.productsService.showProduct(id);
      product$.subscribe((product) => {
        this.updateForm(product);
      });
    });*/

    this.categoriesService.getCategories().subscribe((categories) => this.categories = categories);
  }

  onSubmit(){
    this.submitted = true;
    if (this.formProduct.valid){
      this.productsService.addProduct(this.formProduct.value)
        .subscribe(
          success => {
            this.submitted = false, 
            this.formProduct.reset(), 
            this.alertModalService.showAlertSuccess('Ok! Novo produto cadastrado.')
          },
          error => 
            this.alertModalService.showAlertDanger('Ops! Ocorreu um erro de conexão com a API. Tente novamente mais tarde.'),
          () => console.log("Request completed.")
        );//console.log(this.formProduct.value);
    }
  }

  onCancel() {
    this.submitted = false;
    this.formProduct.reset();
  }

  updateForm(product) {
    this.formProduct.patchValue({
      //id: product.id,
      name: product.name,
      category: product.category
    });
  }

  hasError(field: string) {
    return this.formProduct.get(field).errors;
  }
}
