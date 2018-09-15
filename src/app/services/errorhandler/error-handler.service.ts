import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'
import { ErrorMessageService } from '../errormessage/error-message.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandlerService {

  constructor(
    private toastrService: ToastrService,
    private router: Router
  ) { }

  public handleError(error: HttpErrorResponse) {
    switch (error.status) {
      case 401:
        // token expired
        this.router.navigateByUrl('/login');
        this.toastrService.error('Please login again', 'Login Expired!');
        break;

      case 400:
        if (error.message.indexOf('User') > -1) {
          // login error
          this.toastrService.error('Please check your login credentials', 'Login Failed!');
        }
        break;

      default:
        // any error occured
        this.toastrService.error('An error occured', 'Error!')
        break;
    }
  }

}
