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
  source:any;

  constructor(public navCtrl: NavController, private watherProvider:WeatherProvider) {
    this.refresh();
  }

  Add(input){
    console.log('input',input)
    this.source=input;
    this.refresh();
  }

  refresh(){
    this.watherProvider.getWeather(this.source).finally(() => {
    })
      .subscribe (
        result => {
          console.log(result);
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
