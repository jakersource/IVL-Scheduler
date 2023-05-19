import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeeplinkService {
  constructor() {}
  deeplink() {
    let app = {
      launchApp: function () {
        setTimeout(function () {
          window.location.href =
            'https://apps.apple.com/ar/app/studio-by-ivl/id1597374060';
        }, 25);
        window.location.href = 'com.ivl-collective.ivl-collective-app://Home'; //which page to open(now from mobile, check its authorization)
      },
      openWebApp: function () {
        window.location.href =
          'https://apps.apple.com/ar/app/studio-by-ivl/id1597374060';
      },
    };
    app.launchApp();
  }
}
