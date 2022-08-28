import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { KakZakazatComponent } from './kak-zakazat/kak-zakazat.component';
import { OplataIDostavkaComponent } from './oplata-i-dostavka/oplata-i-dostavka.component';
import { GarantiyaComponent } from './garantiya/garantiya.component';
import { CompanyServicesRoutingModule } from './company-services-routing.module';
import { YanyandexMapComponent } from './yanyandex-map/yandex-map.component';
import {PrivacyComponent} from './privacy-policy/privacy.component'
import  {ManagerServiceModule} from './_shared/services/maneger-service.module'
@NgModule({
  declarations: [
    AboutComponent,
    KakZakazatComponent,
    OplataIDostavkaComponent,
    GarantiyaComponent,
    YanyandexMapComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    CompanyServicesRoutingModule,
    ManagerServiceModule
  ],
  exports: [
    AboutComponent,
    KakZakazatComponent,
    OplataIDostavkaComponent,
    GarantiyaComponent,
    YanyandexMapComponent,
    PrivacyComponent
  ],
})
export class CompanyServicesModule { }
