import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


const material = [MatButtonModule]

@NgModule({
  declarations: [],
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
