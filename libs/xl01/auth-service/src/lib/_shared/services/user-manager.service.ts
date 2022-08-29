import { Injectable } from '@angular/core';
import {AuthStorage} from './auth-storage.services';
import {OptShopperStorage} from './opt-shopper-storage.services';
import { BehaviorSubject, timeout } from 'rxjs';
import {JwtHelper} from '../_class/jwt-helper.class'
import {ManagerServiceModule} from '../services/maneger-service.module'
import {CarStorage} from '../services/car-strorage.services'


@Injectable(
  {
    providedIn: ManagerServiceModule
}
)
export class UserManagerService{

    private _invalidLogin$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

    private _invalidOptShopper$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

    private _jwtHelper=new JwtHelper();

    constructor(
        private authStorage:AuthStorage,
        private optShopperStorage:OptShopperStorage,
        private carShop:CarStorage
    ) {


    }


     /** Client subscribe() for _invalidLogin chenged; !! ngOnDestroy()-- unsubscribe !!  */
  public get InvalidOptShopper$(): BehaviorSubject<boolean> {
    return this._invalidOptShopper$;
  }

           /** set value for  _invalidLogin ; defauld -- true */
  public setInvalidOptShopper$(i: boolean,opt:string|null) {
  // 
    this._invalidOptShopper$.next(i);
    if(!i){
      this.optShopperStorage.Set=opt;
    }
    else{
      this.optShopperStorage.remove();
    }
   
  }


        /** Client subscribe() for _invalidLogin chenged; !! ngOnDestroy()-- unsubscribe !!  */
   public get InvalidLogin$(): BehaviorSubject<boolean> {
    return this._invalidLogin$;
  }
               /** set value for  _invalidLogin ; defauld -- true */
  public setInvalidLogin$(i: boolean,token:string|null) {
  //  
    this._invalidLogin$.next(i);
    if(!i){
     
      this.authStorage.Set=token;
      let delta=this.getTokenDeltaTime(token)
      setTimeout(this.setInvalidLoginIsTrue, delta);
      }
      else{
        this.authStorage.remove();
      }
  }
 
  public get RoleUser():string|null {
    let token=this.authStorage.Get;
    if(token){
     let role=  this._jwtHelper.decodeToken(token)
     return role ? role.role : null;

    }
    return null;
  }

  private setInvalidLoginIsTrue(){
      this._invalidLogin$.next(true)
    } 
 
   /** сколько секунд живет */
   private getTokenDeltaTime( token:string|null):number{
    if(token){
      let dataExpiration=  this._jwtHelper.getTokenExpirationDate(token);
       let data =new Date();

     // Date() valueOf()  возвращает примитивное значение объекта Date в виде числового типа данных — количества миллисекунд, 
     //  прошедших с полуночи 01 января 1970 по UTC
       if(dataExpiration)  {
      let delta=dataExpiration.valueOf() - data.valueOf();
       return delta;
       }
       return 0;
    }
   
    return 0;
   }
 
 
  
   
}