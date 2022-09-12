import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, NgForm } from '@angular/forms';
import { UserManagerService } from '@x01-v1/xl01/auth-service';
import { AccountService } from '../_shared/services/account.service';
import { Subscription } from 'rxjs';

//https://code-maze.com/angular-security-with-asp-net-core-identity/
//https://account.mail.ru/user/2-step-auth/passwords/
//https://help.mail.ru/mail/security/protection/external
//https://docs.microsoft.com/ru-ru/aspnet/core/security/authentication/accconfirm?view=aspnetcore-6.0&tabs=netcore-cli

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [

  ]
})
export class SignInComponent implements OnInit {
  private _subscriptions: Subscription[] = [];

 
  _errorMgs: string[] = [];
  _isUserInvalid = false;

  // parser file on load
  public password: string = '';
  public email: string = '';
  public rememberme: boolean = true;
  public returnUrl: string='';
  /** вход пользователья ;создание токена */
  constructor(
    private _accountServie: AccountService,
    private _userManager: UserManagerService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    let subLogin = this._userManager.InvalidLogin$.subscribe(
      d => {
        this._isUserInvalid=d
       if(!d){
        this.router.navigate(['/']);
       }
      }

    );

    this._subscriptions.push(subLogin);
  }

  ngOnDestroy() {
    this._subscriptions.forEach((s) => s.unsubscribe());
  }

  

  externalLogin(name: string) {
    this._errorMgs = [];
    console.log("---  externalLogin-- " + name);
    this._errorMgs.push("провайдер авторизации  -" + name + "-временно недоступен");
  }

  submitForm(loginForm: NgForm) {
  
    this._errorMgs = [];

    const credentials = JSON.stringify(loginForm.value);
    

    this._accountServie.login(credentials).subscribe({
      next: d => {
        
        this._userManager.setInvalidLogin$(false, d.access_token);
      //  console.log("login_in-"+d.access_token)
       
        this.router.navigateByUrl('');
      },
      error:(err: HttpErrorResponse) => {
        let body: string;
        this._userManager.setInvalidLogin$(true, null);
         console.error(err);  
         if(err.status === 401){
          this._errorMgs.push("пользователь не авторизован,войдите на сайт");
          this._errorMgs.push(err.error);
          return;
        }   
        if ( err.status == 400) {
          
          this._errorMgs.push(' 400 Bad Request');
          this._errorMgs.push(err.error);

          return;

          //  body = 'Не верный логин или пароль';
        }


        body =
          'Ошибка соединения с сервером -Сообщиете Администаратору Pесурса';

        this._errorMgs.push(body);
      }
  });

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
