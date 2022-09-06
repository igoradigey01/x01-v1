import { Component, OnInit } from '@angular/core';
import {StateView} from '../../_shared/_interfaces/state-view'

@Component({
  selector: 'x01-v1-main-user-profile',
  templateUrl: './main-user-profile.component.html',
  styleUrls: ['./main-user-profile.component.scss'],
})
export class MainUserProfileComponent implements OnInit {

  public _flagViewState:StateView=StateView.default;
  constructor() {}

  ngOnInit(): void {}
}
