import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'apps/xf01/src/environments/environment';
import { UserRegistrationDto } from '../_shared/_interfaces/user-registrationDto.model';
import { AccountService } from '../_shared/services/account.service';
import { PasswordConfirmationValidatorService } from '../_shared/services/password-confirmation-validator.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public _user: UserRegistrationDto = {
    clientURI: '',
    firstName: '',
    lastName: '',
    confirmPassword: '',
    email: '',
    password: '',
  };

  _successfulSave: boolean = false; // пользователь успешно сохранен
  _errorMgs: string[] = [];
  _flagButoon: boolean = true;

  constructor(
    private _authService: AccountService,
    private _passConfValidator: PasswordConfirmationValidatorService
  ) {}

  ngOnInit(): void {}

  submitForm(registerForm: NgForm) {

    this._errorMgs = [];

    const credentials = JSON.stringify(registerForm.value);
    // this._errorMgs.length=0;

  }

  private registerUser = (registerFormValue: any) => {
    const formValues = {
      // let array1 = ['h', 'e', 'l', 'l', 'o'];
      ...registerFormValue, //  let array2 = [...array1]; // -- ['h', 'e', 'l', 'l', 'o'] --- вывод
    };

    this._errorMgs.length = 0;

    this._authService.registerUser(this._user).subscribe(
      (_) => {
        console.log('Successful registration');
        this._successfulSave = true;
        this._flagButoon = true;
      },
      (error: HttpErrorResponse) => {
        this._successfulSave = false;
        this._flagButoon = false;

        if (error.status === 401 || error.status == 400) {
          console.log(error.error);
          if (error.error.errors) this._errorMgs.push(error.error.errors);
          else this._errorMgs.push(error.error);
          return;
        }

        this._errorMgs.push(
          'Ошибка соединения с сервером -Сообщиете Администаратору Pесурса'
        );
      }
    );
  };
}
