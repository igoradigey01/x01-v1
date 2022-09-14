import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';

export interface ScriptModel {
  name: string;
  src: string;
  loaded: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TelegramLoginWidgetService {
  script: ScriptModel = <ScriptModel>{
    name: 'telegram_widget',
    src: 'https://telegram.org/js/telegram-widget.js?19',
    loaded: false,
  };

  public loadWidgetScript(): void {
    // Complete if already loaded
    if (this.script.loaded) {
    } else {
      // Add the script

      // Load the script
      let scriptElement = document.createElement('script');
      scriptElement.type = 'text/javascript';
      scriptElement.src = this.script.src;

      scriptElement.async;
      scriptElement.setAttribute('data-telegram-login', 'x_01_bot');
      scriptElement.setAttribute('data-size', 'large');
      scriptElement.setAttribute(
        'data-auth-url',
        'https://xl-01.ru/telelram-callback'
      );
      scriptElement.setAttribute('data-request-access', 'write');

      scriptElement.onload = () => {
        this.script.loaded = true;
      };

      scriptElement.onerror = (error: any) => {
        console.error("Couldn't load script telegram_widget" + error);
      };

      document.getElementsByTagName('x01-v1-telegram-login-widget')[0].appendChild(scriptElement);
    }
  }
}
