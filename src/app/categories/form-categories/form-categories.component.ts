import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertModalService } from '../../shared/alert-modal.service';

@Component({
  selector: 'app-form-categories',
  templateUrl: './form-categories.component.html',
  styleUrls: ['./form-categories.component.css']
})
export class FormCategoriesComponent implements OnInit {

	formCategory: FormGroup;
	submitted: boolean = false;

  constructor(
  	private formBuilder: FormBuilder,
    private alertModalService: AlertModalService,
  	) { }

  ngOnInit(): void {
  	this.formCategory = this.formBuilder.group({
      _id: [null],
      name: [null, [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
  	this.submitted = true;
    if (this.formCategory.valid) {
      this.alertModalService.showAlertSuccess("Ok! Form successful submitted.");
      console.log("Submitted");
    } else {
      this.alertModalService.showAlertDanger("Ops! Can not to submit the form. Try again later. Sorry...");
    }
  }

  onCancel() {
  	this.formCategory.reset();
  	console.log("Cancel");
  }

  hasError(field: string) {
  	return this.formCategory.get(field).errors;
  }

}
