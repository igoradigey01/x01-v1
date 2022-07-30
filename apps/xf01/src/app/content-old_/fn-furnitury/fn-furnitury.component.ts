import { Component, OnInit } from '@angular/core';
import { Meta}     from '@angular/platform-browser';

@Component({
  selector: 'app-fn-furnitury',
  templateUrl: './fn-furnitury.component.html',
  styleUrls: ['./fn-furnitury.component.scss']
})
export class FnFurnituryComponent implements OnInit {
  _metaKeywords:string="Функциональная фурнитура";
  constructor(
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.meta.addTag(  {name: 'keywords', content: this._metaKeywords});
  }

}
