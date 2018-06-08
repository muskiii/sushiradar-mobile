import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  content: {};

  constructor(public navCtrl: NavController, translate: TranslateService) {
    translate.get(["APP_NAME","VERSION","DESCRIPTION"
  ]).subscribe(
    (values) => {
      console.log('Loaded values', values);
      this.content = 
        {
          appName: values.APP_NAME,
          description: values.DESCRIPTION,
          version: values.VERSION
        };
    });
  }

}
