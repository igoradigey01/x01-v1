import { Component, OnInit ,AfterContentInit} from '@angular/core';
import {GoogleLoginWidgetService} from '../_shared/services/google-login-widget.servise'
declare const  google: any; 

@Component({
  selector: 'x01-v1-google-login-widget',
  templateUrl: './google-login-widget.component.html',
  styleUrls: ['./google-login-widget.component.scss'],
 
})
export class GoogleLoginWidgetComponent implements OnInit,AfterContentInit {
  constructor(
    private repozitory:GoogleLoginWidgetService
  ) {}

  ngOnInit(): void {
    this.repozitory.loadWidgetScript();

    if(google){     
    
      let element=document.getElementById("buttonDiv") as HTMLElement
      google.accounts.id.renderButton(
        element,{
          theme: "outline", size: "large"
        }
      
      )   
    console.log("GoogleLoginWidgetComponent-- ngOnInit--renderButton--"+element.id)
    }
   

   
   
  }

  ngAfterContentInit():void{
    console.log("GoogleLoginWidgetComponent-- ngAfterContentInit--")
    try{
    
  }catch(err){
    console.error(err);
  }

  }

  
}
