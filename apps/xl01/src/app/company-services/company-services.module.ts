import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { KakZakazatComponent } from './kak-zakazat/kak-zakazat.component';
import { OplataIDostavkaComponent } from './oplata-i-dostavka/oplata-i-dostavka.component';
import { GarantiyaComponent } from './garantiya/garantiya.component';
import { CompanyServicesRoutingModule } from './company-services-routing.module';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';

import {PrivacyComponent} from './privacy-policy/privacy.component'
import  {ManagerServiceModule} from './_shared/services/maneger-service.module'

const mapConfig: YaConfig = {
  apikey: 'ccd3dfd9-9b90-48ee-acb8-9dcb64a82f8a',
  lang: 'en_US',
};


@NgModule({
  declarations: [
    AboutComponent,
    KakZakazatComponent,
    OplataIDostavkaComponent,
    GarantiyaComponent,
   
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    CompanyServicesRoutingModule,
    ManagerServiceModule,
    AngularYandexMapsModule.forRoot(mapConfig)
  ],
  exports: [
    AboutComponent,
    KakZakazatComponent,
    OplataIDostavkaComponent,
    GarantiyaComponent,
   
    PrivacyComponent
  ],
})
export class CompanyServicesModule { }
