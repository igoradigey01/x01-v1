import { Component, OnInit } from '@angular/core';


import { ProfileService } from '../../_shared/services/profile.service';
import { User } from 'apps/xf01/src/app/_shared/_interfaces/user.model';
import { Router } from '@angular/router';
import {UserProfileDto} from '../../_shared/_interfaces/user-profileDto.model'
import {UserManagerService} from '@x01-v1/xl01/auth-service'
;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  public _user: UserProfileDto = <UserProfileDto>{
    firstName:'',
    lastName:'',
    phone: '',
    address: '',
    email: '',
    clientURI:''
  };
  /**Вывод профиля пользователя (возможно его заказы???-не раализовано) */
  constructor(
    private profileServece: ProfileService,
    private userMangagerService: UserManagerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.profileServece.Get().subscribe(
      (data: UserProfileDto) => {
        this._user = data;

        //   console.log("getUserProfile() next:"+ data.name);
      },
      (error) => {
        console.log('getUserProfile() error:' + error);
      }
    );
  }

  onEditButton() {
    //throwError("Not implement exepthion");
    
    //  console.log('test button user-profile');
    this.router.navigateByUrl('auth/user-profile-edit');
  }

  onDeleteButton() {
    Error('Not implement exepthion');
    
    //  console.log('test button user-profile');
    this.router.navigateByUrl('auth/user-profile-delete');
  }
}
