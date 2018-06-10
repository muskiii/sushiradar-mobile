import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;

  constructor(public navCtrl: NavController, private watherProvider:WeatherProvider) {
    this.refresh();
  }

  refresh(){
    this.watherProvider.getWeather().finally(() => {
    })
      .subscribe (
        result => {
          console.log(result[0]);
          this.weather = result[0];
        },
        error => {
          console.log(error)
        },
        () => {
          // No errors, route to new page
        }
      );
  }

}
