import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';

@Component({
  selector: 'logout',
  templateUrl: './logout.html',
  styleUrls: ['./logout.scss']
})
export class Logout {

  constructor() {

  }
}
