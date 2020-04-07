import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { BarApiService } from '../../bar-api.service';
import { AlertModalComponent } from '../../shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	formProduct: FormGroup;
  submitted: boolean = false;
  bsModalRef: BsModalRef;

  constructor(
  	private formBuilder: FormBuilder,
  	private barApiService: BarApiService,
    private route: ActivatedRoute,
    private modalService: BsModalService
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
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Ops! Ocorreu um erro ao tentar criar um novo produto. Tente novamente mais tarde.';
  }

  handleSuccess() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.message = 'Ok! Novo produto salvo com sucesso.';    
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
