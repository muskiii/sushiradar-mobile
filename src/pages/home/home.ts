import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private watherProvider:WeatherProvider) {
    this.refresh();
  }

  refresh(){
    this.watherProvider.getWeather().subscribe(weather => {console.log(weather)});
  }

}
