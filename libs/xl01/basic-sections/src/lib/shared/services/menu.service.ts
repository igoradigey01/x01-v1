import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenuItem } from '../_interfaces/menu-item.model'
import { ManagerServiceModule } from './maneger-service.module'
import { Observable } from 'rxjs';


@Injectable({
    providedIn: ManagerServiceModule,
})
export class MenuService {

    public _menuItems: MenuItem[] = [];
    public menus: any[] = [];
    constructor(
        private _http: HttpClient

    ) {
        // url.Controller = 'Katalog';
        // console.log("test -- Katalog Servises - init ok")
    }

   


   public setMenuFromJSON(jsonMenuURL: string) {
        // return this.http.get(this.jsonMenuURL)
        // .map(data => data.json() as Array<Item>).map(data => data.json() as Array<Item>);
        fetch(jsonMenuURL).then(res => res.json())
            .then(jsonData => {
                jsonData.map((menuItem: any) => {
                    //  console.log(`${menuItem.id}: ${menuItem.name} ${menuItem.url}`);
                    this._menuItems.push(<MenuItem>{ id: menuItem.id, name: menuItem.name, url: menuItem.url });
                }
                )
            });


    }

    public  getMenuItems(){
        return this._menuItems;
    }
}