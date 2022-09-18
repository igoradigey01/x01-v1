import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { KakZakazatComponent } from './kak-zakazat/kak-zakazat.component';
import { OplataIDostavkaComponent } from './oplata-i-dostavka/oplata-i-dostavka.component';
import { GarantiyaComponent } from './garantiya/garantiya.component';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { PrivacyComponent } from './privacy-policy/privacy.component';

const mapConfig: YaConfig = {
  apikey: 'ccd3dfd9-9b90-48ee-acb8-9dcb64a82f8a',
  lang: 'en_US',
};

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'kak-zakazat',
    component: KakZakazatComponent
  },
  {
    path: 'oplata-i-dostavka',
    component: OplataIDostavkaComponent
  },
  {
    path: 'garantiya',
    component: GarantiyaComponent
  },

  {
    path: 'privacy',
    component: PrivacyComponent
  }
  
]

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
    AngularYandexMapsModule.forRoot(mapConfig),
    RouterModule.forChild(routes)
  ],
  exports: [
    AboutComponent,
    KakZakazatComponent,
    OplataIDostavkaComponent,
    GarantiyaComponent,
    PrivacyComponent
  ],
})
export class Xl01CompanyServicesModule { }
