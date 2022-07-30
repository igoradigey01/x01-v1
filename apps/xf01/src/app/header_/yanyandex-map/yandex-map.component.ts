import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yandex-map',
  templateUrl: './yandex-map.component.html',
  styleUrls: ['./yandex-map.component.scss'],
})
export class YanyandexMapComponent implements OnInit {
  _url_yandex_map: string =
    'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8513cf418b0529012a19d886bb102312dcdc9c55221d2ae1cd3af36159e4e423&amp;width=461&amp;height=404&amp;lang=ru_RU&amp;scroll=true&id=mymap';
  constructor() {}

  ngOnInit(): void {
    /*
 const ymapsScript = document.createElement('script');
    ymapsScript.src =
      '//api-maps.yandex.ru/2.1/?load=package.standard&lang=ru_RU';
    const ymapsWidgetScript = document.createElement('script');
    ymapsWidgetScript.src =this._url_yandex_map;

     // 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8f94cc586f75881b5cd555bf59c3b9b78edb6f84b724c51b1626cad239acf4a4&width=500&height=400&lang=ru_RU&scroll=true&id=mymap';
  //  document.body.appendChild(ymapsScript);
    document.body.appendChild(ymapsWidgetScript);
    */
    const ymapsScript = document.createElement('script');
    ymapsScript.src=this._url_yandex_map;
    ymapsScript.type="text/javascript";
   // ymapsScript.charset="utf-8"
    document.body.appendChild(ymapsScript);
  }
}
