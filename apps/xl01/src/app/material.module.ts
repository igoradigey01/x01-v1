import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';



const material = [
  MatSidenavModule
]

@NgModule({
  declarations: [],
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
