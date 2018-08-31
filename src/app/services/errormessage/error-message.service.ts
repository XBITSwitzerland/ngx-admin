import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable() 
export class ErrorMessageService {
    private errorMessageSource = new Subject<string>();
    errorMessage$ = this.errorMessageSource.asObservable();

    addErrorMessage(message: string): void {
        this.errorMessageSource.next(message);
    }

    constructor() {
        
    }
}