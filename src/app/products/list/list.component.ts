import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { BarApiService } from '../../bar-api.service';
import { Product } from '../product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	products$: Observable<Product[]>;
	id: any;

  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
  	private api: BarApiService
  	) { 
  }

  ngOnInit(): void {
  	//this.api.getProduct().subscribe((products) => this.products = products);
  	this.products$ = this.api.getProducts();
  }
}
