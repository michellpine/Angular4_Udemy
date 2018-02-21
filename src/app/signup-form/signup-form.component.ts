import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ],
    // async validators
    UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required)
  });

  login() {
    /* service que se conecta con un endpoint
    let isValid = authService.login(this.form.value);
    if (!isValid) {
      this.form.setErrors({
        invalidLogin: true
      })
    }
    */
   this.form.setErrors({
     invalidLogin: true
    });
  }

  get username () {
    return this.form.get('username');
  }
}
