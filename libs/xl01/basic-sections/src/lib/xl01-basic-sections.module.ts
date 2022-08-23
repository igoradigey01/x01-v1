import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import {MaterialModule} from './material.module'
import  {Xl01SharedStylesModule} from '@x01-v1/xl01/shared/styles'
import { HttpClientModule } from '@angular/common/http';
import { ManagerServiceModule } from './shared/services/maneger-service.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    Xl01SharedStylesModule,
    HttpClientModule,
    ManagerServiceModule
  ],
  declarations: [FooterComponent, SidebarComponent, HeaderComponent],
  exports:[
    FooterComponent, SidebarComponent, HeaderComponent,ManagerServiceModule]
})
export class Xl01BasicSectionsModule {}
