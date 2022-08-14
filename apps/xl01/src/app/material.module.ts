import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';



const material = [
  
  MatButtonModule,
  MatDividerModule
  
]

@NgModule({
  declarations: [],
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
