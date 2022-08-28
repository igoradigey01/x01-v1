import { Component, OnInit,Output, EventEmitter,Input  } from '@angular/core';
import {MenuService} from './../shared/services/menu.service'
import { MenuItem } from '../shared/_interfaces/menu-item.model';
import {Router} from '@angular/router';

@Component({
  selector: 'x01-v1-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  @Output()
  onToggleSideBar = new EventEmitter()

  @Input() public jsonMenuURL:string='';

  private _invalidLogin: boolean = false;
  private _isManager: boolean = false;
  private _isAdmin: boolean = false;
  private _isShopper: boolean = false;
  private _isOptovik:boolean=false;


  public MenuItems=():MenuItem[]=>{

    let m=this.menuService.getMenuItems();
    console.log(m);

    return m;
  }

  constructor(
    private menuService:MenuService,
    private router:Router

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
    this.onToggleSideBar.emit();
     
    }
    
  /* public goTo(i:number){
    let navs=this.MenuItems()
  if(navs.length>0){
      this.onToggleSideBar.emit();
   let nav  = navs[i];
   this.router.navigate([nav.url]);
   
  }
  }   */
}
