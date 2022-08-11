import { Component, OnInit,Output, EventEmitter,Input } from '@angular/core';
import {meny} from './../_shared/_interfaces/meny.model'
// ChangeDetectionStrategy https://habr.com/ru/company/infopulse/blog/358860/
// logi_form https://github.com/VladiRR/svvs/blob/master/libs/frontend/client/ui/login-form/src/lib/login-form-ui/login-form-ui.component.ts
//sample https://code-maze.com/angular-material-navigation/

@Component({
  selector: 'x01-v1-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Output()
  meny = new EventEmitter()

  private _invalidLogin: boolean = true;
  private _isManager: boolean = false;
  private _isAdmin: boolean = false;
  private _isShopper: boolean = false;
  private _isOptovik:boolean=false;

 

@Input() public company_name_1:string|undefined;
@Input() public company_name_2:string=""; //First Site
@Input() public srcLogo:string='';
  constructor() {}

  ngOnInit(): void {}
  public get IsAdmin(): boolean {
    //  return true;
       if(this._isAdmin && !this._invalidLogin){
                 return true;
       }
      return false;
    }
    public get IsManager(): boolean {
     // return true;
       if(this._isManager  && !this._invalidLogin){
                 return true;
       }
      return false;
    }
    public get IsShopper(): boolean {
     // return true;
       if(this._isShopper && !this._invalidLogin){
                 return true;
       }
      return false;
    }
    public get IsShopperOpt(): boolean {
      return this._isOptovik;
    }

    public get InvalidLogin():boolean{
      return this._invalidLogin;
    }
    public onMobaleMeny(): void {
    //  this.login.emit(this.loginForm.value)
     this.meny.emit();
    }
}
