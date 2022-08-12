import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { Xl01UiModule } from '@x01-v1/xl01/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    Xl01UiModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
