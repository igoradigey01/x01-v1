import { Component, OnInit } from '@angular/core';
import { Meta}     from '@angular/platform-browser';

@Component({
  selector: 'app-input-texnik',
  templateUrl: './input-texnik.component.html',
  styleUrls: ['./input-texnik.component.scss']
})
export class InputTexnikComponent implements OnInit {

  _metaKeywords:string="Встраиваемая техника";

  constructor(
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.meta.addTag(  {name: 'keywords', content: this._metaKeywords});
  }

}
