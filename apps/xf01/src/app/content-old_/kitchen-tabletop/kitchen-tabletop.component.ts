import { Component, OnInit } from '@angular/core';
import { Meta}     from '@angular/platform-browser';

@Component({
  selector: 'app-kitchen-tabletop',
  templateUrl: './kitchen-tabletop.component.html',
  styleUrls: ['./kitchen-tabletop.component.scss']
})
export class KitchenTabletopComponent implements OnInit {
  _metaKeywords:string='Кухонные Столешницы  ; ханская ';
  constructor(
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.meta.addTag(  {name: 'keywords', content: this._metaKeywords});
  }

}
