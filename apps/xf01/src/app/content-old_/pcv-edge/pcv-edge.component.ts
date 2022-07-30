import { Component, OnInit } from '@angular/core';
import { Meta}     from '@angular/platform-browser';

@Component({
  selector: 'app-pcv-edge',
  templateUrl: './pcv-edge.component.html',
  styleUrls: ['./pcv-edge.component.scss']
})
export class PCVEdgeComponent implements OnInit {
  _metaKeywords:string="Кромка ПВХ";

  constructor(
    private meta: Meta
  ) { }

  ngOnInit(

  ): void {
    this.meta.addTag(  {name: 'keywords', content: this._metaKeywords});
  }

}
