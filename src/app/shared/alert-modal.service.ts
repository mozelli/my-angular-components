import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AlertModalComponent } from './alert-modal/alert-modal.component';

enum AlertTypes {
	DANGER = 'danger',
	WARNING = 'warning',
	SUCCESS = 'success',
	INFO = 'info'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

	bsModalRef: BsModalRef;

  constructor(
  	private modalService: BsModalService
  	) { }

  private showAlert(type: AlertTypes, message: string) {
  	this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
  }

  showAlertDanger(message: string) {
  	this.showAlert(AlertTypes.DANGER, message);
  }

  showAlertSuccess(message: string) {
  	this.showAlert(AlertTypes.SUCCESS, message);
  }

  showAlertInfo(message: string) {
  	this.showAlert(AlertTypes.INFO, message);
  }

  showAlertWarning(message: string) {
  	this.showAlert(AlertTypes.WARNING, message);
  }
}
