import { Component, OnInit,Output, EventEmitter,Input  } from '@angular/core';

@Component({
  selector: 'x01-v1-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  @Output()
  onSideBar = new EventEmitter()

  private _invalidLogin: boolean = false;
  private _isManager: boolean = false;
  private _isAdmin: boolean = false;
  private _isShopper: boolean = false;
  private _isOptovik:boolean=false;

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

  public onSideBarVisible(): void {
    //  this.login.emit(this.loginForm.value)
     this.onSideBar.emit();
    }
}
