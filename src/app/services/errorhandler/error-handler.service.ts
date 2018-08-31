import { Injectable } from '@angular/core';
import { ErrorMessageService } from '../errormessage/error-message.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ErrorHandlerService {

    constructor(private errorMessageService: ErrorMessageService) { }

        handleError(error: HttpErrorResponse): void {
            switch(error.status) {
                case 404:
                    // URL invalid or not reachable
                    this.errorMessageService.addErrorMessage('URL invalid or not reachable');
                    break;
                case 403:
                    // Access denied (Forbidden)
                    this.errorMessageService.addErrorMessage('403 Forbidden');
                    break;
                case 401:
                    // Unauthorized (probably session expired)
                    this.errorMessageService.addErrorMessage('401 Access denied. Try reloading the page');
                    break;
                case 0:
                    this.errorMessageService.addErrorMessage('An Error occured');
                    break;
                default:
                    this.errorMessageService.addErrorMessage('An unexpected Error occured');
                    break;
            }
            
        }
    
}