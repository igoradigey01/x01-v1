import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {ContentComponent} from './content-old_/content/content.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppComponent} from './app.component'


const routes: Routes = [
  /* {
  path: '',
  component: ContentComponent}
 */
  {
    path: '',
    component: AppComponent}
  ,
  {
    path: '/menu',
    loadChildren: () => import('./company-services/company-services.module').then((m) => m.CompanyServicesModule),
  },

  
  {
    path: '**',
    component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
