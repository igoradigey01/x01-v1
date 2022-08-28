import { Component, OnInit } from '@angular/core';
import { YandexMapJsService } from '../_shared/services/yandex-map.service';
//declare var test: any;
//declare var hello:any;

//https://yandex.ru/dev/maps/jsapi/doc/2.1/quick-start/index.html

@Component({
  selector: 'app-yandex-map',
  templateUrl: './yandex-map.component.html',
  styleUrls: ['./yandex-map.component.scss'],
})
export class YanyandexMapComponent implements OnInit {
  constructor(private repository: YandexMapJsService) {}

  ngOnInit(): void {
    const ymap_v2 = document.createElement('script');
    ymap_v2.src =
      'https://api-maps.yandex.ru/2.1/?apikey=ccd3dfd9-9b90-48ee-acb8-9dcb64a82f8a&lang=ru_RU';
    ymap_v2.type = 'text/javascript';

    document.body.appendChild(ymap_v2);

    //---------------------------------------------------
    const ymapsScript = document.createElement('script');
     if(this.repository.YandexMapJs)
    ymapsScript.text =this.repository.YandexMapJs;
     // "ymaps.ready(init);function init(){let myMap = new ymaps.Map('map',{center: [44.68, 39.97],zoom: 7 }); }";
    ymapsScript.type = 'text/javascript';
    // ymapsScript.charset="utf-8"
    document.body.appendChild(ymapsScript);
  }
}
