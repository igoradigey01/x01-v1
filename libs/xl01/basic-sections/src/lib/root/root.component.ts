import { Component, OnInit } from '@angular/core';
import { UserManagerService } from '@x01-v1/xl01/auth-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'x01-v1-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {


  title = 'xl01';
  public _srcLogo:string='./../assets/logo/logo.webp';
  public _srcMenuJson:string="../assets/menu.json"
  public _company_name_1:string|undefined;
  public _company_name_2:string="XL01"

  _flagPanel: boolean = true;
 // _flagPanel2: boolean = false;
  _flagSideBarHiden = false;
  
  constructor() {}

  ngOnInit(): void {}

  //---------------------------------
  onSideBarVisible() {
    this._flagPanel = !this._flagPanel;
  //  this._flagPanel2 = !this._flagPanel2;
    this._flagSideBarHiden = !this._flagSideBarHiden;
  }
 
}
