import { Component, OnInit } from '@angular/core';
import { Title ,Meta}     from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  _title:string="каталог форнитуры";
  _metaKeywords:string="Функциональная фурнитура;лицевая фурнитура;Кухонные мойки;Встраиваемая техника;Столешницы;Кромка пвх;"
  _metaAuthor:string="Fuks Man"
  _metaDescription:string="Продажи мебелной форнитуры в ханской"
  constructor(
    private titleService:Title,
    private meta: Meta,



    ) {


    }


  ngOnInit(): void {
    this.titleService.setTitle( this._title)
    this.meta.addTag({ name: 'description', content: this._metaDescription });
  //  this.meta.addTag({ name: 'description', content: 'How to use Angular 4 meta service' },true);
    this.meta.addTag({ name: 'author', content: this._metaAuthor });
    this.meta.addTag(  {name: 'keywords', content: this._metaKeywords});
  }

}
