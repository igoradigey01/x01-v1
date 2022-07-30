import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {ContentComponent} from './content-old_/content/content.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CategoriaNComponent} from './content_/categoria_/categoria-n/categoria-n.component'


const routes: Routes = [
  /* {
  path: '',
  component: ContentComponent}
 */
  {
    path: '',
    component: CategoriaNComponent}
  ,
  {
    path: 'menu',
    loadChildren: () => import('./header_/header.module').then((m) => m.HeaderModule),
  },

  {
    path: 'content',
    loadChildren: () => import('./content_/content.module').then((m) => m.ContentModule),
  },
  {
    path: 'manager',
    loadChildren: () =>
      import('./manager_/manager.module').then((m) => m.ManagerModule),
  },

  {
    path: 'account',
    loadChildren: () =>
      import('./account_/account.module').then((m) => m.AuthModule),
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
