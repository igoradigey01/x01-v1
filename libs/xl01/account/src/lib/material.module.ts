import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';



const material = [
  
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatTabsModule

  
]

@NgModule({
  declarations: [],
  imports: [material],
  exports:[material],
  providers:[
   
  ]
})
export class MaterialModule { }
