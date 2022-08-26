import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NomenclatureComponent } from './nomenclature/nomenclature.component';


@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: 'Nomenclature', pathMatch: 'full', component: NomenclatureComponent}
    ]),
  ],
  declarations: [
    NomenclatureComponent
  ],
  exports:[
    NomenclatureComponent
  ]
})
export class Xl01ContentSectionModule {}
