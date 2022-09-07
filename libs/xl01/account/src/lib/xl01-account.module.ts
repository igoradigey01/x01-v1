import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MaterialModule} from './material.module'
import { SignInComponent } from './sign-in/sign-in.component';
//import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogOffComponent } from './log-off/log-off.component';
import { UserProfileComponent } from './profile_/user-profile/user-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ManagerServiceModule } from './_shared/services/maneger-service.module';
import { UserProfileEditComponent } from './profile_/user-profile-edit/user-profile-edit.component';
import { UserProfileDeleteComponent } from './profile_/user-profile-delete/user-profile-delete.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { Xl01AuthModule } from '@x01-v1/xl01/auth-service';
import { MatchPasswordDirective } from './_shared/_helpers/must-match.directive';
import {MainUserProfileComponent} from './profile_/main-user-profile/main-user-profile.component'
import {UserOrdersMainComponent} from './user-orders_/user-orders-main/user-orders-main.component'
import {UserOrdersTableComponent} from './user-orders_/user-orders-table/user-orders-table.component'
import {UserOrdersItemComponent} from './user-orders_/user-orders-item/user-orders-item.component'



const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'sing-up', component: SignUpComponent },
  { path: 'sing-off', component: LogOffComponent },
  { path: 'user-profile', component: MainUserProfileComponent }, 
  { path: 'email-confirmation', component: EmailConfirmationComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [
    CommonModule,   
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    ManagerServiceModule,
    RouterModule.forChild(routes),
    Xl01AuthModule,
    
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
    LogOffComponent,
    UserProfileComponent,
    UserProfileEditComponent,
    UserProfileDeleteComponent,
    EmailConfirmationComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    MatchPasswordDirective,
    MainUserProfileComponent,
    UserOrdersMainComponent,
    UserOrdersTableComponent,
    UserOrdersItemComponent
  ],
  exports: [
    SignInComponent,
    SignUpComponent,
    LogOffComponent,
    UserProfileComponent,
    UserProfileEditComponent,
    UserProfileDeleteComponent,
    EmailConfirmationComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  providers:[
  
  ]
})
export class Xl01AccountModule {}
