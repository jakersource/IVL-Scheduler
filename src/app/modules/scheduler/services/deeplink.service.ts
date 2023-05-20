import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeeplinkService {
  constructor() {}
  deeplink(id: string) {
    let ua = navigator.userAgent.toLowerCase();
    let isIphone = ua.indexOf('iphone') > -1;

    if (isIphone) {
      let app = {
        launchApp: function () {
          window.open(
            'com.ivl-collective.ivl-collective-app://ClassDetails?classId=' + id,
            '_blank'
          );
        }
      };
      app.launchApp();
    } else {

      let app = {
        openWebApp: function () {
          window.open(
            'https://apps.apple.com/ar/app/studio-by-ivl/id1597374060',
            '_blank'
          );
        },
      };

      app.openWebApp();
    }
  }
}
