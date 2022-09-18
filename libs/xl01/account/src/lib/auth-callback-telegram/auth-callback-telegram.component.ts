import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TelegramLoginWidgetService} from '../_shared/services/telegram-login-widget.servise'
import {UserTelegramDto} from '../_shared/_interfaces/user-telegramDto.model'
//https://core.telegram.org/widgets/login
//https://medium.com/@alexandershogenov/%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D0%BC-oauth-%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8E-telegram-%D0%BD%D0%B0-%D1%81%D0%B2%D0%BE%D1%91%D0%BC-%D1%81%D0%B0%D0%B9%D1%82%D0%B5-74d0d63095b0
@Component({
  selector: 'x01-v1-auth-callback-telegram',
  templateUrl: './auth-callback-telegram.component.html',
  styleUrls: ['./auth-callback-telegram.component.scss'],
})
export class AuthCallbackTelegramComponent implements OnInit {
 
  public user:UserTelegramDto=<UserTelegramDto>{}

  constructor(
    private repozitory: TelegramLoginWidgetService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.user.id = this.route.snapshot.queryParams['id'];
    this.user.firstName = this.route.snapshot.queryParams['first_name'];
    this.user.username=this.route.snapshot.queryParams['username'];
    this.user.authDate=this.route.snapshot.queryParams['auth_date'];
    this.user.hash=this.route.snapshot.queryParams['hash'];
    
  }
}
