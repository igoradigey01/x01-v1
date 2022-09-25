import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserManagerService } from '@x01-v1/xl01/auth-service';
import {SocialAuthService} from '@abacritt/angularx-social-login'

@Component({
  selector: 'app-log-off',
  templateUrl: './log-off.component.html',
  styleUrls: ['./log-off.component.scss'],
})
export class LogOffComponent implements OnInit {
  constructor(
    private router: Router,
    private userMangagerService: UserManagerService,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.userMangagerService.setInvalidLogin$(true, null);
    this.socialAuthService.signOut();
    this.router.navigate(['']);
  }
}
