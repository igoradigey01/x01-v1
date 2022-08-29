import { Injectable } from '@angular/core';
import {Storage} from '../_class/storage.class'
import {ManagerServiceModule} from '../services/maneger-service.module'

export const authSorageKey:{[key:string]:string}={
    accessToken:'access_token',
    optShopper:'opt_var',
    carShop:'car_obj'
}

@Injectable({
    providedIn: ManagerServiceModule
}
)
export class AuthStorage implements Storage{

    constructor() {}
    /** clear all obj in storage */
    public clear():void{
        localStorage.clear();

    }
    /**get access token */
    public   get Get():string|null{
        
        return  localStorage.getItem(authSorageKey["accessToken"]);;
     }

     /**set access token */
    public set Set(access_token:string|null){
        if(access_token)
        localStorage.setItem(authSorageKey["accessToken"],access_token);
        


     }
    public remove():void{
        localStorage.removeItem(authSorageKey["accessToken"]);

    }

  
}