import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'apps/xf01/src/environments/environment';
import { UserRegistrationDto } from '../_shared/_interfaces/user-registrationDto.model';
import { AccountService } from '../_shared/services/account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public showSuccess: boolean = false;

  public _user: UserRegistrationDto = {
    clientURI: '',
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    confirmPassword: '',
    email: '',
    password: '',
  };

  // _successfulSave: boolean = false; // пользователь успешно сохранен
  _errorMgs: string[] = [];

  constructor(private _authService: AccountService) {}

  ngOnInit(): void {}

  onReset(form: NgForm): void {
    form.reset();
  }

  public submitForm = (registerForm: NgForm) => {
    this._errorMgs = [];

    // const credentials = JSON.stringify(registerForm.value);
    // this._errorMgs.length=0;

    this._authService.registerUser(this._user).subscribe({
      next: (_) => {
        console.log('Successful registration');
        this.showSuccess = true;
      },
      error: (err: HttpErrorResponse) => {
        this.showSuccess = true;
        console.error(err);
        if (err.status === 401) {
          this._errorMgs.push('отказ в доступе');
          return;
        }
        if (err.status === 400) {
          this._errorMgs.push(' 400 Bad Request');
          this._errorMgs.push(err.error);
          return;
        }

        this._errorMgs.push(
          'Ошибка соединения с сервером -Сообщиете Администаратору Pесурса'
        );
      },
    });
  };
}
