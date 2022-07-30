import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header_/menu/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoriaNComponent } from './content_/categoria_/categoria-n/categoria-n.component';

import { SharedVarService } from './_shared/services/shared-var.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    CategoriaNComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
   // SharedVarService,
    { provide: SharedVarService, useExisting: 'SharedVar' },
    { provide: 'SharedVar', useClass: SharedVarService }

    /*
         useClass - каждый раз при обращении к зависимости, указанной в provide, создается новый экземпляр класса, указанного в useClass;
        useExisting - каждый раз при обращении к зависимости, указанной в provide, будет использоваться один и тот же экземпляр класса, указанного в useClass;
        useValue - позволяет при обращении к зависимости, указанной в provide, использовать предопределенный объект;
       useFactory и deps - эти свойства позволяют создавать переопределяющее значение динамически уже в процессе работы приложения.

    */

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
