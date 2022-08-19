import { Injectable } from '@angular/core';
import {AuthStorage} from './auth-storage.services';
import {OptShopperStorage} from './opt-shopper-storage.services';
import { BehaviorSubject } from 'rxjs';
import {JwtHelper} from '../_class/jwt-helper.class'


@Injectable()
export class UserManagerService{

    private _invalidLogin$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

    private _invalidOptShopper$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

    private _jwtHelper=new JwtHelper();

    constructor(
        private authStorage:AuthStorage,
        private optShopperStorage:OptShopperStorage
    ) {


    }


     /** Client subscribe() for _invalidLogin chenged; !! ngOnDestroy()-- unsubscribe !!  */
  public get InvalidOptShopper$(): BehaviorSubject<boolean> {
    return this._invalidOptShopper$;
  }
  /** set value for  _invalidLogin ; defauld -- true */
  public setInvalidOptShopper$(i: boolean) {
  //  console.log(' UserManagerService -- setInvalidLogin$ --' + i);
    this._invalidOptShopper$.next(i);
  }


   /** Client subscribe() for _invalidLogin chenged; !! ngOnDestroy()-- unsubscribe !!  */
   public get InvalidLogin$(): BehaviorSubject<boolean> {
    return this._invalidLogin$;
  }
  /** set value for  _invalidLogin ; defauld -- true */
  public setInvalidLogin$(i: boolean) {
  //  console.log(' UserManagerService -- setInvalidLogin$ --' + i);
    this._invalidLogin$.next(i);
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