import { Component, OnInit ,Output, EventEmitter,Input } from '@angular/core';
import { UserProfileDto } from '../../_shared/_interfaces/user-profileDto.model';
import {StateView} from '../../_shared/_interfaces/state-view'

@Component({
  selector: 'app-user-profile-delete',
  templateUrl: './user-profile-delete.component.html',
  styleUrls: ['./user-profile-delete.component.scss']
})
export class UserProfileDeleteComponent implements OnInit {

  @Output()
  onToggleViewState:EventEmitter<StateView> = new EventEmitter()

  @Input() public User: UserProfileDto = <UserProfileDto>{
    firstName:'',
    lastName:'',
    phone: '',
    address: '',
    email: ''
   
  };
  constructor() { }

  ngOnInit(): void {
  }

}
