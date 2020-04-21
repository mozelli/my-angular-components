import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, Subject, empty } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { ProductsService } from '../products.service';
import { AlertModalService } from '../../shared/alert-modal.service';
import { Product } from '../product';

@Component({
  selector: 'app-list',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

	products$: Observable<Product[]>;
  error$ = new Subject<boolean>();
	id: any;

  constructor(
  	private route: ActivatedRoute,
    private location: Location,
    private router: Router,
  	private api: ProductsService,
    private alertModalService: AlertModalService,
  	) { 
  }

  ngOnInit(): void {
  	this.onRefresh();
  }

  onRefresh() {
    this.products$ = this.api.getProducts()
      .pipe(
        catchError(
          error => {
            this.alertModalService.showAlertDanger('Ops! Ocorreu um erro ao tentar acessar a API. Tente novamente mais tarde.');
            this.error$.next(true);
            return empty();
          }          
        )
      );
  }
}
