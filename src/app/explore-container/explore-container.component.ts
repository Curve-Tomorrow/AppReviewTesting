import { Component, Input } from '@angular/core';
import {
  AppRate,
  AppRateReviewTypeAndroid,
  AppRateReviewTypeIos,
} from '@awesome-cordova-plugins/app-rate/ngx';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {
  @Input() name?: string;

  constructor(private appRate: AppRate) {}

  promptReview() {
    this.appRate.setPreferences({
      displayAppName: 'My custom app title',
      usesUntilPrompt: 5,
      promptAgainForEachNewVersion: true,
      reviewType: {
        ios: AppRateReviewTypeIos.AppStoreReview,
        android: AppRateReviewTypeAndroid.InAppBrowser,
      },
      storeAppURL: {
        ios: '1539581708',
        android: 'market://details?id=com.thefast800.app',
      },
      customLocale: {
        title: 'Would you mind rating %@?',
        message:
          'It won’t take more than a minute and helps to promote our app. Thanks for your support!',
        cancelButtonLabel: 'No, Thanks',
        laterButtonLabel: 'Remind Me Later',
        rateButtonLabel: 'Rate It Now',
        yesButtonLabel: 'Yes!',
        noButtonLabel: 'Not really',
        appRatePromptTitle: 'Do you like using %@',
        feedbackPromptTitle: 'Mind giving us some feedback?',
      },
      callbacks: {
        handleNegativeFeedback: () => {
          window.open('mailto:feedback@example.com', '_system');
        },
        onRateDialogShow: (callback: any) => {
          console.log(callback);
          callback(1); // cause immediate click on 'Rate Now' button
        },
        onButtonClicked: (buttonIndex: number) => {
          console.log('onButtonClicked -> ' + buttonIndex);
        },
      },
    });
    this.appRate.promptForRating(true);
  }
}
