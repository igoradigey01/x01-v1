import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { NgForm } from '@angular/forms';
import { UserManagerService } from '@x01-v1/xl01/auth-service';
import { AccountService } from '../_shared/services/account.service';
//import { MatCheckboxDefaultOptions, MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';


import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers:[
   
  ]
})
export class SignInComponent implements OnInit {
  private _subscriptions: Subscription[] = [];

  _flagButoon: boolean = false;
  _errorMgs: string[] = [];
  _isUserValid=false;

  // parser file on load
  public password: string = '';
  public email: string = '';
  public rememberme: boolean = true;
  /** вход пользователья ;создание токена */
  constructor(
    private _accountServie: AccountService,
    private _userManager: UserManagerService,
    private router: Router,
  
  ) { }

  ngOnInit(): void {
    let subLogin = this._userManager.InvalidLogin$.subscribe(
      d=>this._isUserValid
    );
   
    this._subscriptions.push(subLogin);
  }

  ngOnDestroy() {
    this._subscriptions.forEach((s) => s.unsubscribe());
  }

  noCheckBox(){
    console.log("noCheckBox------------------")
    this.rememberme=!this.rememberme;
  }

  externalLogin( name:string){
    this._errorMgs=[];
    console.log("---  externalLogin-- " +name);
    this._errorMgs.push("провайдер авторизации  -"+name+"-временно недоступен");
  }

  submitForm(loginForm: NgForm) {
    // this._form.disable();
    this._errorMgs = [];

    const credentials = JSON.stringify(loginForm.value);
    // this._errorMgs.length=0;

    this._accountServie.login(credentials).subscribe(
      (d) => {
      //  debugger
        this._userManager.setInvalidLogin$(false,d.access_token);
        this._flagButoon = true;
        /* if (this.tokenService.IsAdmin()) {
          this.userManagerService.isAdimin = true;
        } */
        this.router.navigateByUrl('');
      },
      (err: HttpErrorResponse) => {
        let body: string;
        this._userManager.setInvalidLogin$(true,null);
        this._flagButoon = false;
        if (err.status === 401 || err.status == 400) {
          //this.userManagerService.invalidLogin = true;
          //  console.log(  error.message);
          this._errorMgs.push(err.error);

          return;

          //  body = 'Не верный логин или пароль';
        }


        body =
          'Ошибка соединения с сервером -Сообщиете Администаратору Pесурса';

        this._errorMgs.push(body);
      }
    );

    // this.router.navigate(['/auth/sing-off']);
  }

 

  onFileInput(event: any) {
    let data = event.target.files[0];

    let fr = new FileReader();
    fr.readAsText(data);
    fr.onload = () => {
      console.log('Input-file cheng ok------' + fr.result);
      let coolVar = fr.result as string;

      var partsArray = coolVar.split(';');
      this.email = partsArray[0].trim();
      this.password = partsArray[1].trim();

      /*  console.log(this._log+"----log----");
      console.log(this._pass+"---pas--"); */
    };
    fr.onerror = function () {
      console.log(fr.error);
    };
  }
}
