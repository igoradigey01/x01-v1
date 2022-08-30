import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {ManagerServiceModule} from './_shared/services/maneger-service.module'
import {UserManagerService} from './_shared/services/user-manager.service'

@NgModule({
  imports: [
    CommonModule,
    ManagerServiceModule
  ],
  declarations:[
    
  ],
  exports:[
    ManagerServiceModule
  ]
 
})
export class Xl01AuthModule {}
