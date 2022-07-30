import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
//import { environment } from 'apps/xf01/src/environments/environment';
import { ManagerServiceModule } from './maneger-service.module';
import { KatalogN } from 'apps/xf01/src/app/_shared/_interfaces/katalog-n.model';

import { Observable } from 'rxjs';
import {TokenService} from 'apps/xf01/src/app/_shared/services/token.service';
import { RouteApiService } from 'apps/xf01/src/app/_shared/services/route-api.service';

@Injectable({
  providedIn: ManagerServiceModule
})
export class KatalogNService {

  constructor(
    private _http: HttpClient,
    private _token:TokenService,
    private _url: RouteApiService
    ) { }





    public KatalogNs = (categoriaId:number): Observable<KatalogN[]> => {
      this._url.Controller = 'KatalogN';
      this._url.Action = 'KatalogNs';
      this._url.ID=categoriaId;


      let headers: HttpHeaders = new HttpHeaders({
        Accept: 'application/json',
         Authorization: 'Bearer ' + this._token.AccessToken,
      });


      return this._http.get<KatalogN[]>(this._url.Url, { headers });
    };










}
