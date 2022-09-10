import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


import { ManagerServiceModule } from './maneger-service.module';

import { RouteApiService } from '../services/route-api.service';
import { RegistrationResponseDto } from '../_interfaces/registration-responseDto.model';
import { UserRegistrationDto } from '../_interfaces/user-registrationDto.model';
import { ForgotPasswordDto } from '../_interfaces/forgot-passwordDto.model';
import { UrlEncoder } from '../class/url-encoder.class';
import { ResetPasswordMailDto } from '../_interfaces/reset-password-mailDto.model';

@Injectable({
  providedIn: ManagerServiceModule,
})
export class AccountService {
  // readonly _controller: string = 'Account';
  // readonly _action = 'Login';

  constructor(
    private http: HttpClient,

    private url: RouteApiService
  ) {}

  /** Get token login pass */
  public login = (credentials: string): Observable<any> => {
    // debugger
    this.url.Controller = 'Account';
    this.url.Action = 'Login';
    this.url.ID = null;

    //  console.log('login-credentials = '+credentials);
    return this.http.post(this.url.Url, credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  };

  public registerUser = (body: UserRegistrationDto) => {
    this.url.Controller = 'Account';
    this.url.Action = 'Registration'; //this._action;
    this.url.ID = null;

    return this.http.post<RegistrationResponseDto>(this.url.Url, body);
  };

  public confirmEmail = (token: string, email: string) => {
    this.url.Controller = 'Account';
    this.url.Action = 'EmailConfirmation'; //this._action;
    this.url.ID = null;

    let params = new HttpParams({ encoder: new UrlEncoder() });
    params = params.append('token', token);
    params = params.append('email', email);

    return this.http.get(this.url.Url, { params: params });
  };

  public forgotPassword = (body: ForgotPasswordDto) => {
    this.url.Controller = 'Account';
    this.url.Action = 'ForgotPassword';
    this.url.ID = null;

    return this.http.post(this.url.Url, body);
  };

  public resetPassword = (body: ResetPasswordMailDto) => {
    this.url.Controller = 'Account';
    this.url.Action = 'ResetPasswordMail';
    this.url.ID = null;

    return this.http.post(this.url.Url, body);
  };
}
