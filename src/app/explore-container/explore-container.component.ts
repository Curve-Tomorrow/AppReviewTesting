import { Component, Input } from '@angular/core';
import { AppRate } from '@awesome-cordova-plugins/app-rate/ngx';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;

  constructor(private appRate: AppRate) {}

  promptReview() {
    this.appRate.promptForRating(true);
  }
}
