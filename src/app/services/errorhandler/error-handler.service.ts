import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'
import { ErrorMessageService } from '../errormessage/error-message.service';

@Injectable()
export class ErrorHandlerService {

  constructor(
    private errorMessageService: ErrorMessageService
  ) { }

  public handleError(error: HttpErrorResponse) {
    this.errorMessageService.addErrorMessage('an Error occured');
  }

}
