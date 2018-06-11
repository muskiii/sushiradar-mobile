import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import 'rxjs/add/operator/finally';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  source:any;
  loading: any;
  addSource : boolean;
  constructor(public navCtrl: NavController, private watherProvider:WeatherProvider,private loadingController:LoadingController) {
    this.addSource = false;
    this.refresh();
  }

  Add(input){
    console.log('input',input)
    this.source=input;
    this.refresh();
  }

  refresh(){
    this.loading = this.loadingController.create({
      content: "Please wait..."
    })
    this.loading.present();
    this.watherProvider.getWeather(this.source).finally(() => {
    })
      .subscribe (
        result => {
          console.log(result);
          this.weather = result[0];
        },
        error => {
          this.addSource = true;
          console.log(error);
          setTimeout(() => {
            this.loading.dismiss();
          }, 2000);
        },
        () => {
          setTimeout(() => {
            this.loading.dismiss();
          }, 2000);
        }
      );
  }

}
