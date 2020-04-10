import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-categories',
  templateUrl: './form-categories.component.html',
  styleUrls: ['./form-categories.component.css']
})
export class FormCategoriesComponent implements OnInit {

	formCategory: FormGroup;
	submitted: boolean = false;

  constructor(
  	private formBuilder: FormBuilder
  	) { }

  ngOnInit(): void {
  	this.formCategory = this.formBuilder.group({
      _id: [null],
      name: [null, [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
  	this.submitted = true;
  	console.log("Submitted");
  }

  onCancel() {
  	this.formCategory.reset();
  	console.log("Cancel");
  }

  hasError(field: string) {
  	return this.formCategory.get(field).errors;
  }

}
