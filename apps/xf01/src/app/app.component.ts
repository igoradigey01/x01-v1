import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Мебельная Фурнитура Ханская';
  year:number=new Date(2021,0,1).getFullYear();
  title:string=" ИП Должанский ";
}
