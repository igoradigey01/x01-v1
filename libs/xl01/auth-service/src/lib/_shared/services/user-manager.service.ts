import { Injectable } from '@angular/core';
import { AccessTokenStorage } from './access-token-storage.services';
import { RefreshTokenStorage } from './refresh-token-storage.services';
import { OptShopperStorage } from './opt-shopper-storage.services';
import { BehaviorSubject, timeout } from 'rxjs';
import { JwtHelper } from '../_class/jwt-helper.class';

import { CarStorage } from '../services/car-strorage.services';

@Injectable({
  providedIn: 'root',
})
export class UserManagerService {
  private _invalidLogin$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

  private _invalidOptShopper$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

  private _jwtHelper = new JwtHelper();

  constructor(
    private accessTokenStorage: AccessTokenStorage,
    private refreshTokenStorage: RefreshTokenStorage,
    private optShopperStorage: OptShopperStorage,

    private carShop: CarStorage
  ) {}

  /** Client subscribe() for _invalidLogin chenged; !! ngOnDestroy()-- unsubscribe !!  */
  public get InvalidOptShopper$(): BehaviorSubject<boolean> {
    let opt = this.optShopperStorage.Get;
    if (opt) {
      if (opt === 'opt-1') {
        this._invalidOptShopper$.next(false);
      }
    }
    return this._invalidOptShopper$;
  }

  /** set value for  _invalidLogin ; defauld -- true */
  public setInvalidOptShopper$(i: boolean, opt: string | null) {
    //
    this._invalidOptShopper$.next(i);
    if (!i) {
      this.optShopperStorage.Set = opt;
    } else {
      this.optShopperStorage.remove();
    }
  }

  /** Client subscribe() for _invalidLogin chenged; !! ngOnDestroy()-- unsubscribe !!  */
  public get InvalidLogin$(): BehaviorSubject<boolean> {
    return this._invalidLogin$;
  }
  /** set value for  _invalidLogin ; defauld -- true */
  public setInvalidLogin$(i: boolean, token: string | null) {
    //
    this._invalidLogin$.next(i);
    if (!i) {
      this.accessTokenStorage.Set = token;
      let delta = this.getTokenDeltaTime(token);
      setTimeout(this.setInvalidLoginIsTrue, delta);
    } else {
      this.accessTokenStorage.remove();
    }
  }

  public get RoleUser(): string | null {
    let token = this.accessTokenStorage.Get;
    if (token) {
      let role = this._jwtHelper.decodeToken(token);
      return role ? role.role : null;
    }
    return null;
  }

  public get AccessToken(): string | null {
    return this.accessTokenStorage.Get;
  }

  public accessTokenRemove() {
    this.accessTokenStorage.remove();
  }

  public get RefreshToken(): string | null {
    return this.refreshTokenStorage.Get;
  }

  public set RefreshToken(refresh_token: string | null) {
    this.refreshTokenStorage.Set = refresh_token;
  }

  public refreshTokenRemove() {
    this.refreshTokenStorage.remove();
  }
  private setInvalidLoginIsTrue() {
    this._invalidLogin$.next(true);
  }

  /** сколько секунд живет */
  private getTokenDeltaTime(token: string | null): number {
    if (token) {
      let dataExpiration = this._jwtHelper.getTokenExpirationDate(token);
      let data = new Date();

      // Date() valueOf()  возвращает примитивное значение объекта Date в виде числового типа данных — количества миллисекунд,
      //  прошедших с полуночи 01 января 1970 по UTC
      if (dataExpiration) {
        let delta = dataExpiration.valueOf() - data.valueOf();
        return delta;
      }
      return 0;
    }

    return 0;
  }
}
