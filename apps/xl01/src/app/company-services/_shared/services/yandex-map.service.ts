import { Injectable } from '@angular/core';
import { ManagerServiceModule } from './maneger-service.module';

import { HttpClient } from '@angular/common/http';
//declare var font: any;

@Injectable({
  providedIn: ManagerServiceModule,
})
export class YandexMapJsService {
  private _urlYandexMapJs: string = '/assets/yandex-map.js';
  private _load_js: string | null = null; //Roboto-Regular-normal.js'
  private var_yandex_js: string = 'yandex_map_js';

  constructor(private _http: HttpClient) {
    if (!this.Exists) {
      this._http
        .get(this._urlYandexMapJs, {
          responseType: 'text',
        })
        .subscribe((d) => {
          this._load_js = d;
          localStorage.setItem(this.var_yandex_js, this._load_js);
        });
    } else {
      this._load_js = localStorage.getItem(this.var_yandex_js);
    }
  }

  public get YandexMapJs(): string|null {
    

    return this._load_js;
  }

  private get Exists(): boolean {
    let font = localStorage.getItem(this.var_yandex_js);
    // debugger
    if (font) {
      return true;
    }
    return false;
  }
}
