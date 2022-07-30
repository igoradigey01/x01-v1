import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { KakZakazatComponent } from './kak-zakazat/kak-zakazat.component';
import { OplataIDostavkaComponent } from './oplata-i-dostavka/oplata-i-dostavka.component';
import { GarantiyaComponent } from './garantiya/garantiya.component';

const routes: Routes = [
  {
    path: 'about',
    component:AboutComponent},
    {
      path: 'kak-zakazat',
      component:  KakZakazatComponent},
      {
        path: 'oplata-i-dostavka',
        component: OplataIDostavkaComponent},
        {
          path: 'garantiya',
          component: GarantiyaComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
