import { Component, OnInit,Output, EventEmitter,Input, OnDestroy  } from '@angular/core';


import {MenuService} from './../shared/services/menu.service'
import { MenuItem } from '../shared/_interfaces/menu-item.model';


// json https://www.angularjswiki.com/angular/how-to-read-local-json-files-in-angular/




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
  onSideBar = new EventEmitter()
   
  
  


  private _invalidLogin: boolean = true;
  private _isManager: boolean = false;
  private _isAdmin: boolean = false;
  private _isShopper: boolean = false;
  private _isOptovik:boolean=false;

 

// private subscription: Subscription|undefined ;

 

@Input() public company_name_1:string|undefined;
@Input() public company_name_2:string=""; //First Site
@Input() public srcLogo:string='';
@Input() public jsonMenuURL:string='';

public MenuItems=():MenuItem[]=>{
  return this.menuService.getMenuItems();
}

  constructor(
    private menuService:MenuService

  ) {}

  ngOnInit(): void {
   this.menuService.setMenuFromJSON(this.jsonMenuURL);
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

    public get InvalidLogin():boolean{
      return this._invalidLogin;
    }
    public onSideBarVisible(): void {
      //  this.login.emit(this.loginForm.value)
       this.onSideBar.emit();
      }

}
