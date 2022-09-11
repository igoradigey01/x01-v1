import { Component, OnInit } from '@angular/core';
import {ForgotPasswordDto} from '../_shared/_interfaces/forgot-passwordDto.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AccountService} from '../_shared/services/account.service';
import { environment } from 'apps/xf01/src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
   public _email:string|undefined;
 
  public successMessage: string|null=null;
  public _errorMgs: string[]=[];
  public showSuccess: boolean=false;
  public _flagButoon:boolean=false;
  constructor(
    private _authService: AccountService
  ) { }

  ngOnInit(): void {
   // this.forgotPasswordForm =
}
 

  public forgotPassword = (forgotPasswordFormValue:any) => {
    //this.showError = this.showSuccess = false;
    const forgotPass = { ...forgotPasswordFormValue };
    const forgotPassDto: ForgotPasswordDto = {
      email: forgotPass.email,
      clientURI:environment.clientRoot + 'account/reset-password'
    }
    this._errorMgs=[];
    this._authService.forgotPassword( forgotPassDto)
    .subscribe(_ => {
      this.showSuccess = true;
      this._flagButoon=true;
     
    },
    (error: HttpErrorResponse) => {


      this._flagButoon = false;

      if (error.status === 401 || error.status == 400) {
        console.log(error.error);
        if (error.error.errors)
          this._errorMgs.push(error.error.errors);
        else
          this._errorMgs.push(error.error);
        return;
      }

      this._errorMgs.push('Ошибка соединения с сервером -Сообщиете Администаратору Pесурса');
    })
  }

  public onBack(){

   

  }


}
