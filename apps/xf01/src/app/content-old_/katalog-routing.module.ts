import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FnFurnituryComponent } from './fn-furnitury/fn-furnitury.component';
import { FaceFurnituryComponent } from './face-furnitury/face-furnitury.component';
import { InputTexnikComponent } from './input-texnik/input-texnik.component';
import { KitchenSinkComponent } from './kitchen-sink/kitchen-sink.component';
import { PCVEdgeComponent } from './pcv-edge/pcv-edge.component';
import { KitchenTabletopComponent } from './kitchen-tabletop/kitchen-tabletop.component';

const routes: Routes = [

  {path:"fn-furnitury",component:FnFurnituryComponent},
  {path:"face-furnitury",component:FaceFurnituryComponent},
  {path:"input-texnik",component:InputTexnikComponent},
  {path:"kitchen-sink",component:KitchenSinkComponent}, // мойки
  {path:"pcv-edge",component:PCVEdgeComponent}, //пвх кромка
  {path:"kitchen-tabletop",component:KitchenTabletopComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KatalogRoutingModule { }
