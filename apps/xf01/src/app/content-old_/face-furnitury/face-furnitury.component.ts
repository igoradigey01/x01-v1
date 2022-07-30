import { Component, OnInit } from '@angular/core';
import { Meta}     from '@angular/platform-browser';

@Component({
  selector: 'app-face-furnitury',
  templateUrl: './face-furnitury.component.html',
  styleUrls: ['./face-furnitury.component.scss']
})
export class FaceFurnituryComponent implements OnInit {
  _metaKeywords:string="Лицевая фурнитура;ручки мебель;";
  constructor(
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.meta.addTag(  {name: 'keywords', content: this._metaKeywords});
  }

}
