import { Injectable } from '@angular/core';
import {Storage} from '../_class/storage.class'

export const authSorageKey:{[key:string]:string}={
    accessToken:'access_token',
    optShopper:'opt_var'
}

@Injectable()
export class AuthStorage implements Storage{

    constructor() {}
    /** clear all obj in storage */
    public clear():void{
        localStorage.clear();

    }

    public   get Get():string|null{
        
        return  localStorage.getItem(authSorageKey["accessToken"]);;
     }
    public set Set(access_token:string|null){
        if(access_token)
        localStorage.setItem(authSorageKey["accessToken"],access_token);

     }
    public remove():void{
        localStorage.removeItem(authSorageKey["accessToken"]);

    }

  
}