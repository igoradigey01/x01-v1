import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
//import {SharedStylesModule} from '@x01-v1/shared-styles'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
    //  SharedStylesModule    
  ],
  declarations: [
    HeaderComponent],
  exports: [
    HeaderComponent]
})
export class UiModule { }
