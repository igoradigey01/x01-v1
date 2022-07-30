import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { KakZakazatComponent } from './kak-zakazat/kak-zakazat.component';
import { OplataIDostavkaComponent } from './oplata-i-dostavka/oplata-i-dostavka.component';
import { GarantiyaComponent } from './garantiya/garantiya.component';
import { HeaderRoutingModule } from './header-routing.module';
import { YanyandexMapComponent } from './yanyandex-map/yandex-map.component';
@NgModule({
  declarations: [
    AboutComponent,
    KakZakazatComponent,
    OplataIDostavkaComponent,
    GarantiyaComponent,
    YanyandexMapComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  exports: [
    AboutComponent,
    KakZakazatComponent,
    OplataIDostavkaComponent,
    GarantiyaComponent,
    YanyandexMapComponent
  ],
})
export class HeaderModule { }
