import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { BarApiService } from '../../bar-api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	profileForm = this.formBuilder.group({
		name: [''],
		category: [''],
		amount: [''],
		client_price: [''],
		provider_price: ['']
	});

  constructor(
  	private formBuilder: FormBuilder,
  	private barApiServiceervice: BarApiService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(products){
  	//console.log(products);
  	this.barApiServiceervice.addProduct(products).subscribe((result) => console.log(result));

  } 
}
