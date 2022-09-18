import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

import { MaterialModule } from './material.module';
import { Xl01SharedStylesModule } from '@x01-v1/xl01/shared/styles';
import { HttpClientModule } from '@angular/common/http';
import { ManagerServiceModule } from './shared/services/maneger-service.module';
import { RootComponent } from './root/root.component';
import  {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/root',
    pathMatch: 'full',
  },

  {
    path: 'root',
    component: RootComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      }
    ],
  },
  
        
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    Xl01SharedStylesModule,
    RouterModule, // елси не задать неработает routerLink=''
    HttpClientModule,
    ManagerServiceModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    MainComponent,
    RootComponent,
    PageNotFoundComponent
  ],
  exports: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    MainComponent,
    RootComponent,
    PageNotFoundComponent
  ],
})
export class Xl01BasicSectionsModule {}
