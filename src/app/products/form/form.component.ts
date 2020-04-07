import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BarApiService } from '../../bar-api.service';
import { AlertModalService } from '../../shared/alert-modal.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	formProduct: FormGroup;
  submitted: boolean = false;

  constructor(
  	private formBuilder: FormBuilder,
  	private barApiService: BarApiService,
    private route: ActivatedRoute,
    private alertModalService: AlertModalService
    
  ) { }

  ngOnInit(): void {
    /*this.route.params.subscribe((params) => {
      const id: any = params['id'];
      console.log(id);
      const product$ = this.barApiService.showProduct(id);
      product$.subscribe((product) => {
        this.updateForm(product);
        }
      );
    });*/

    this.formProduct = this.formBuilder.group({
      //id: [null],
      name: [null, [Validators.required, Validators.minLength(3)]],
      category: [null, [Validators.required]]
    });
  }

  onSubmit(){
    this.submitted = true;
    if (this.formProduct.valid){
      this.barApiService.addProduct(this.formProduct.value)
        .subscribe(
          success => {this.submitted = false, this.formProduct.reset(), this.handleSuccess()},
          error => this.handleError(),
          () => console.log("Request completo.")
        );
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

  handleError() {
    this.alertModalService.showAlertDanger('Ops! Ocorreu um erro de conexão com a API. Tente novamente mais tarde.');
  }

  handleSuccess() {
    this.alertModalService.showAlertSuccess('Ok! Novo produto cadastrado.');
  }

  hasError(field: string) {
    return this.formProduct.get(field).errors;
  }



  /*this.route.params.subscribe((params) => {
      this.id = params.id;
      console.log(this.id);
      }
    );*/
}
