import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserManagerService } from 'apps/xf01/src/app/_shared/services/user-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _subscriptions: Subscription[] = [];

  private _invalidLogin: boolean = true;
  private _isManager: boolean = false;
  private _isAdmin: boolean = false;
  private _isShopper: boolean = false;
  private _isOptovik:boolean=false;

  company_name_1:string='Fuks';
  company_name_2:string='Man'; //First Site

  //wathappMessages:string="https://wa.me/?text=Меня%20интересует%20объявление%20о%20квартире"

  constructor(
    private userManager: UserManagerService
  ) { }

  ngOnInit(): void {
   // debugger
  let sub1=  this.userManager.InvalidLogin$.subscribe(
      d => {
        this._invalidLogin = d;
        this._isAdmin = this.userManager.IsAdmin;
        this._isManager = this.userManager.IsManager;
        this._isShopper = this.userManager.IsShopper;
        console.log("menu conctructor -- userManager.InvalidLogin$--"+ d);
      }
    )

   let sub2= this.userManager.FlagShopperOpt$.subscribe(
      d=>{
        this._isOptovik=this.userManager.IsShopperOpt;
      }
    )
    this._subscriptions.push(sub1);
    this._subscriptions.push(sub2);

  }
  ngOnDestroy() {
    this._subscriptions
      .forEach(s => s.unsubscribe());
  }
  public get InvalidLogin(): boolean {
    return this._invalidLogin;
    // throw new Error("not impliment exeption");
  }

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

}
