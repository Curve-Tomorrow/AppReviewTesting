import { Component, inject } from '@angular/core';
import { AppRate } from '@awesome-cordova-plugins/app-rate/ngx';
import { ViewDidEnter } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements ViewDidEnter{

  appRate = inject(AppRate);

  constructor() {}

  ionViewDidEnter(): void {
    this.appRate.setPreferences({
      displayAppName: 'My custom app title',
      usesUntilPrompt: 5,
      promptAgainForEachNewVersion: false,
      reviewType: {
        // ios: 'AppStoreReview',
        // android: 'InAppBrowser'
      },
      storeAppURL: {
        ios: '<my_app_id>',
        android: 'market://details?id=<package_name>',
      },
      customLocale: {
        title: "Would you mind rating %@?",
        message: "It won’t take more than a minute and helps to promote our app. Thanks for your support!",
        cancelButtonLabel: "No, Thanks",
        laterButtonLabel: "Remind Me Later",
        rateButtonLabel: "Rate It Now",
        yesButtonLabel: "Yes!",
        noButtonLabel: "Not really",
        appRatePromptTitle: 'Do you like using %@',
        feedbackPromptTitle: 'Mind giving us some feedback?',
      },
      callbacks: {
        handleNegativeFeedback: function(){
          window.open('mailto:feedback@example.com', '_system');
        },
        onRateDialogShow: function(callback){
          callback(1) // cause immediate click on 'Rate Now' button
        },
        onButtonClicked: function(buttonIndex){
          console.log("onButtonClicked -> " + buttonIndex);
        }
      },
      openUrl: function(url) {
        var safariAvailable = false;

        // if (window.SafariViewController) {
        //   SafariViewController.isAvailable(function(available) {
        //     safariAvailable = available;
        //   });
        // }

        if (!safariAvailable) {
           window.open(url, '_blank', 'location=yes');
        } else {
          // SafariViewController.show(
          //   {
          //     url: url,
          //     barColor: "#0000ff", // on iOS 10+ you can change the background color as well
          //     controlTintColor: "#00ffff", // on iOS 10+ you can override the default tintColor
          //     tintColor: "#00ffff", // should be set to same value as controlTintColor and will be a fallback on older ios
          //   },

          //   // this success handler will be invoked for the lifecycle events 'opened', 'loaded' and 'closed'
          //   function(result) {
          //     console.log(result.event)
          //   },

          //   function(msg) {
          //     console.log("Error: " + msg);
          //   }
          // );
        }
      }
    });

    this.appRate.promptForRating();
  }

}
