import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { CategoriesService } from '../categories.service';
import { AlertModalService } from '../../shared/alert-modal.service';
import { Category } from '../Category';

@Component({
  selector: 'app-form-categories',
  templateUrl: './form-categories.component.html',
  styleUrls: ['./form-categories.component.css']
})
export class FormCategoriesComponent implements OnInit {

	formCategory: FormGroup;
	submitted: boolean = false;
  update: boolean = false;

  constructor(
    private categoriesService: CategoriesService,
  	private formBuilder: FormBuilder,
    private alertModalService: AlertModalService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  	) { }

  ngOnInit(): void {
  	this.formCategory = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(3)]]
    });

    this.route.params.subscribe((params) => {
      const id: any = params['id'];
      const product$ = this.categoriesService.showCategory(id);
      product$.subscribe((product) => {
        this.updateForm(product);
        this.update = true;
      });
    });
  }

  updateForm(product) {
    this.formCategory.patchValue({
      id: product.id,
      name: product.name
    });
  }

  onSubmit() {
  	this.submitted = true;
    if (this.formCategory.valid) {
      if (!this.update) {
        this.categoriesService.addCategory(this.formCategory.value).subscribe(
          success => {
            this.alertModalService.showAlertSuccess("Ok! Uma nova categoria foi criada!.");
            //this.formCategory.reset(); 
            //this.submitted = false;
            this.router.navigate(['/categories/list']);
          },
          error => {
            this.alertModalService.showAlertDanger("Ops! Ocorreu um erro ao tentar criar uma nova categoria. Tente novamente mais tarde!");
          } 
        );  
      } else {
        const category = new Category();
        category.id = this.formCategory.value.id;
        category.name = this.formCategory.value.name;
        this.categoriesService.editCategory(category).subscribe(
          success => {
            this.alertModalService.showAlertSuccess("Ok! A categoria foi editada com sucesso!.");
            //this.load();
            this.router.navigate(['/categories/list']);
          },
          error => {
            this.alertModalService.showAlertDanger("Ops! Ocorreu um erro ao tentar editar a categoria. Tente novamente mais tarde!");
          }
        );
      }
    }
  }

  load() {
    location.reload();
  }

  hasError(field: string) {
  	return this.formCategory.get(field).errors;
  }

}
