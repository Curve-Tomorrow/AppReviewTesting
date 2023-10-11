import { Component, Input } from '@angular/core';
import { AppReview } from '@awesome-cordova-plugins/app-review/ngx';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  constructor(private appReview: AppReview) {}

  @Input() name?: string;

  promptReview() {
    this.appReview.requestReview().catch(() => {
      return this.appReview.openStoreScreen();
    });
  }
}
