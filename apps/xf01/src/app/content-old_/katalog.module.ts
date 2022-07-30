import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KatalogRoutingModule } from './katalog-routing.module';
import { FnFurnituryComponent } from './fn-furnitury/fn-furnitury.component';
import { FaceFurnituryComponent } from './face-furnitury/face-furnitury.component';
import { InputTexnikComponent } from './input-texnik/input-texnik.component';
import { KitchenSinkComponent } from './kitchen-sink/kitchen-sink.component';
import { PCVEdgeComponent } from './pcv-edge/pcv-edge.component';
import { KitchenTabletopComponent } from './kitchen-tabletop/kitchen-tabletop.component';


@NgModule({
  declarations: [
    FnFurnituryComponent,
    FaceFurnituryComponent,
    InputTexnikComponent,
    KitchenSinkComponent,
    PCVEdgeComponent,
    KitchenTabletopComponent
  ],
  imports: [
    CommonModule,
    KatalogRoutingModule
  ],exports:[
    FnFurnituryComponent,
    FaceFurnituryComponent,
    InputTexnikComponent,
    KitchenSinkComponent,
    PCVEdgeComponent,
    KitchenTabletopComponent

  ]

})
export class KatalogModule { }
