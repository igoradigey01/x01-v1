import { Component, OnInit,Output, EventEmitter,Input, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';
import {MenuService} from './../shared/services/menu.service'
import { MenuItem } from '../shared/_interfaces/menu-item.model';
import {UserManagerService} from '@x01-v1/xl01/auth-service'







// ChangeDetectionStrategy https://habr.com/ru/company/infopulse/blog/358860/
// logi_form https://github.com/VladiRR/svvs/blob/master/libs/frontend/client/ui/login-form/src/lib/login-form-ui/login-form-ui.component.ts
//sample https://code-maze.com/angular-material-navigation/

@Component({
  selector: 'x01-v1-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  
  
  


  private _invalidLogin: boolean = true;  
  private _isOptovik:boolean=false;
  private _userRole:string|null=null;

 
  private _subscriptions: Subscription[] = [];
// private subscription: Subscription|undefined ;
  

 

@Input() public company_name_1:string|undefined;
@Input() public company_name_2:string=""; //First Site
@Input() public srcLogo:string='';
@Input() public jsonMenuURL:string='';
@Output()
     onToggleSideBar = new EventEmitter()
   

public MenuItems=():MenuItem[]=>{
  return this.menuService.getMenuItems();
}

  constructor(
    private menuService:MenuService,
    private userManager:UserManagerService

  ) {}

  ngOnInit(): void {
   this.menuService.setMenuFromJSON(this.jsonMenuURL);
   let sub1=  this.userManager.InvalidLogin$.subscribe(
    d => {
      this._invalidLogin = d;
      this._userRole = this.userManager.RoleUser;
     
      console.log("menu conctructor -- userManager.InvalidLogin$--"+ d);
    }
  )

 let sub2= this.userManager.InvalidOptShopper$.subscribe(
    d=>{
      this._isOptovik=d;
    }
  )
  this._subscriptions.push(sub1);
  this._subscriptions.push(sub2);

  }

  
  ngOnDestroy() {
    this._subscriptions
      .forEach(s => s.unsubscribe());
  }


  public get IsAdmin(): boolean {
    //  return true;
       if(this. _userRole==='admin' && !this._invalidLogin){
                 return true;
       }
      return false;
    }
    public get IsManager(): boolean {
          let manager=false;

      if (this._userRole === 'manager' || this._userRole === 'furniture') {
       manager=true;
      }
      
     // return true;
       if( manager  && !this._invalidLogin){
                 return true;
       }
      return false;
    }
    public get IsShopper(): boolean {
     // return true;
       if(this._userRole==='shopper' && !this._invalidLogin){
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
       this.onToggleSideBar.emit();
      }

}
