import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-categories',
  templateUrl: './form-categories.component.html',
  styleUrls: ['./form-categories.component.css']
})
export class FormCategoriesComponent implements OnInit {

	formCategory: FormGroup;

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
  	console.log("Submitted");
  }

  onCancel() {
  	console.log("Cancel");
  }

}
