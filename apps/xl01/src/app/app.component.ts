import { Component } from '@angular/core';

@Component({
  selector: 'x01-v1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'xl01';
  public _srcLogo:string='./../assets/logo/logo.webp';
  public _company_name_1:string|undefined;
  public _company_name_2:string="XL01"
}
