import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material.module'
import {ImgRenderComponent} from  '../lib/img-render/img-render.component'


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations:[
    ImgRenderComponent
  
  ],
  exports:[
    ImgRenderComponent

  ]
})
export class Xl01UiModule {}
