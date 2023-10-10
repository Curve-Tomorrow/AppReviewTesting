import { Component, inject } from '@angular/core';
import { AppReview } from '@awesome-cordova-plugins/app-review/ngx';
import { ViewDidEnter } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements ViewDidEnter{

  appReview = inject(AppReview);

  constructor() {

  }

  ionViewDidEnter(): void {
    // this.appReview.requestReview().catch(() => {
    //   return this.appReview.openStoreScreen();
    // });
  }

}
