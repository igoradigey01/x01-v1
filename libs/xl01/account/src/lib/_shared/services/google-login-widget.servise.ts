import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserTelegramDto} from '../_interfaces/user-telegramDto.model'
import { RouteApiService } from './route-api.service';
import { ManagerServiceModule } from './maneger-service.module';

declare const  google: any; 

export interface ScriptModel {
  name: string;
  src: string;
  loaded: boolean;
}

  
@Injectable({
  providedIn: ManagerServiceModule
})
export class GoogleLoginWidgetService {
  //https://developers.google.com/identity/gsi/web/guides/display-button#javascript
 //https://www.truecodex.com/course/angular-6/how-to-use-external-js-files-and-javascript-code-in-angular
 //https://www.htmlgoodies.com/javascript/loading-external-scripts-dynamically-in-angular/




private js_script  = `

window.onload = function () {
  google.accounts.id.initialize({
    client_id: "344759916833-h3r1fju9hj53jd86d142tn44vta9vnsa.apps.googleusercontent.com",
    ux_mode: "redirect",
    login_uri: "${this.url.ClientRootUrl}account/auth-callback-google",
    length: "200" 
    
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" }  // customization attributes
  );
 
}
`;
 
  
 
  script: ScriptModel = <ScriptModel>{
    name: 'google_widget',
    src: 'https://accounts.google.com/gsi/client',
    loaded: false,
  };

  constructor(
    private http: HttpClient,   
    private url: RouteApiService
  ) {
   }

  public loadWidgetScript(): void {
    // Complete if already loaded
   if (this.script.loaded ) {
    
   
    
    } else {
      // Add the script

      // Load the script
      let scriptElement = document.createElement('script');
      scriptElement.type = 'text/javascript';
      scriptElement.src = this.script.src;

      scriptElement.async;
      
     

      scriptElement.onload = () => {
        this.script.loaded = true;
      };

      scriptElement.onerror = (error: any) => {
        console.error("Couldn't load script google_widget" + error);
      };

      let scriptElement2 = document.createElement('script');
      scriptElement2.type = 'text/javascript';
      scriptElement2.text=this.js_script;

      scriptElement2.onload = () => {
       console.log("script_2 google_widget is ok");
      };
      scriptElement2.onerror = (error: any) => {
        console.error("Couldn't load script_2 google_widget" + error);
      };

      let elementDiv =document.createElement('div');
      elementDiv.id='buttonDiv'

      document.getElementsByTagName('x01-v1-google-login-widget')[0].appendChild(scriptElement);
      document.getElementsByTagName('x01-v1-google-login-widget')[0].appendChild(scriptElement2);
      document.getElementsByTagName('x01-v1-google-login-widget')[0].appendChild(elementDiv);
    }
  }
}