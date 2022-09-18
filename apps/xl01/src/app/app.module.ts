import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

import { Xl01BasicSectionsModule } from '@x01-v1/xl01/basic-sections';

import { Xl01SharedStylesModule } from '@x01-v1/xl01/shared/styles';
import { PageNotFoundComponent } from '@x01-v1/xl01/basic-sections';
import { RootComponent} from '@x01-v1/xl01/basic-sections';
import { Xl01AuthModule } from '@x01-v1/xl01/auth-service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  // add buged 200

    Xl01BasicSectionsModule,
    Xl01SharedStylesModule,
    Xl01AuthModule,
    MaterialModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: RootComponent,
          children: [ 
            {
              path: 'account',
              loadChildren: () =>
                import('@x01-v1/xl01/account').then((m) => m.Xl01AccountModule),
            },
        
        
            {
              path: 'menu',
              loadChildren: () =>
                import('@x01-v1/xl01/company-services').then(
                  (m) => m.Xl01CompanyServicesModule
                ),
            } ,         
            
            {
              path: '**',
              component: PageNotFoundComponent,
            },
          
          ]
        },
        {
          path: 'content',
          loadChildren: () =>
            import('@x01-v1/xl01/content-section').then(
              (module) => module.Xl01ContentSectionModule
            ),
        }
      ],
      { initialNavigation: 'enabledNonBlocking' }
    ),
  ],

  providers: [
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
