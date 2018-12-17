import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(private _inapp: InAppBrowser) {

  }

 public openWebpage() {
  const browser = this._inapp.create('https://thinfilmnfc.com ');
  browser.hide();
  }
}
