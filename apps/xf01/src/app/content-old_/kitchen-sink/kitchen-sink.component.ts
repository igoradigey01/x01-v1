import { Component, OnInit } from '@angular/core';
import { Meta}     from '@angular/platform-browser';

@Component({
  selector: 'app-kitchen-sink',
  templateUrl: './kitchen-sink.component.html',
  styleUrls: ['./kitchen-sink.component.scss']
})
export class KitchenSinkComponent implements OnInit {
  _metaKeywords:string="Кухонные мойки";
  constructor(
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.meta.addTag(  {name: 'keywords', content: this._metaKeywords});
  }

}
