import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { Xl01BasicSectionsModule } from '@x01-v1/xl01/basic-sections';
import { MaterialModule } from './material.module';
import { Xl01SharedStylesModule } from '@x01-v1/xl01/shared/styles';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MainComponent} from '@x01-v1/xl01/basic-sections'

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,

    Xl01BasicSectionsModule,
    Xl01SharedStylesModule,
    MaterialModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: MainComponent}
        ,
       
        {
          path: 'menu',
          loadChildren: () =>
            import('./company-services/company-services.module').then(
              (m) => m.CompanyServicesModule
            ),
        },
        {
          path: 'content',
          loadChildren: () =>
            import('@x01-v1/xl01/content-section').then(
              (module) => module.Xl01ContentSectionModule
            ),
        },
        {
          path: '**',
          component: PageNotFoundComponent,
        },
      ],
      { initialNavigation: 'enabledNonBlocking' }
    ),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
