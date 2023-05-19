import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeeplinkService {
  constructor() {}
  deeplink(id: string) {
    let app = {
      launchApp: function () {
        setTimeout(function () {
          window.open('https://apps.apple.com/ar/app/studio-by-ivl/id1597374060', '_blank');
        }, 25);
        window.location.href = 'com.ivl-collective.ivl-collective-app://ClassDetails?classId=' + id;
      },
      openWebApp: function () {
        window.open('https://apps.apple.com/ar/app/studio-by-ivl/id1597374060', '_blank');
      },
    };
    app.launchApp();
  }
}
