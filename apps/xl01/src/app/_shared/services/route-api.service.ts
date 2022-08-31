import { Injectable } from '@angular/core';
import { environment } from 'apps/xf01/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RouteApiService {
  private _serverRoot: string | undefined;
  private _controller: string = '';
  private _action: string | null = null;
  private _id: number | null = null;
  private _postavchikId: number | undefined;

  constructor() {
    this._postavchikId = +environment.postavchikId;
    this._serverRoot = environment.serverRoot;
  }

  public set Controller(name: string) {
    this._controller = name;
  }

  public set Action(name: string | null) {
    this._action = name;
  }

  public set ID(id: number | null) {
    this._id = id;
  }

  public get PostavchikId(): number {
    if (this._postavchikId) return this._postavchikId;
    else return -1;
  }

  public get Url(): string {
    if (this._serverRoot)
      return this.createCompleteRoute(
        this._serverRoot,
        this._controller,
        this._action,
        this._id
      );
    else throw new Error(' environment serverRoot -undefined'); //return 'undefined';
  }

  /** path server image wwwroot/image*/
  public get WWWroot(): string {
    return `${this._serverRoot}images/`;
  
  }

  private createCompleteRoute = (
    envAddress: string,
    controller: string,
    action: string | null,
    id: number | null
  ) => {
    //debugger;
    if (id) return `${envAddress}api/${controller}/${action}/${id}`;
    if (action) return `${envAddress}api/${controller}/${action}`;
   // debugger;
    return `${envAddress}api/${controller}`;
  };
}
