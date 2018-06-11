import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  url;

  constructor(public http: HttpClient) {
    // this.url =  "";
    this.url = "https://sushiradar.herokuapp.com/forecast";
  }

  getWeather(source : string){
    if (source !== undefined){
      return this.http.get("http://source.ngrok.io/forecast".replace("source", source));
    }
    // return [{"id":46,"target":"something","country":"Argentina","city":"Buenos Aires","latitude":"-34.61000061","longitude":"-58.36999893","extended":[{"forecastID":46,"day":26,"month":5,"year":2018,"yday":145,"hour":19,"monthName":"May","weekday":"Saturday","ampm":"PM","tzShort":"America/Argentina/Cordoba","tzLong":"-03","highT":18.0,"lowT":16.0,"aveWindHPH":14.0,"aveWindDir":"N","aveWindDegrees":10.0,"precipAllDay":"0","aveHumidity":68.0,"conditions":"Clear","iconURL":"http://icons.wxug.com/i/c/k/clear.gif"},{"forecastID":46,"day":27,"month":5,"year":2018,"yday":146,"hour":19,"monthName":"May","weekday":"Sunday","ampm":"PM","tzShort":"America/Argentina/Cordoba","tzLong":"-03","highT":20.0,"lowT":18.0,"aveWindHPH":8.0,"aveWindDir":"NNE","aveWindDegrees":19.0,"precipAllDay":"0","aveHumidity":86.0,"conditions":"Clear","iconURL":"http://icons.wxug.com/i/c/k/clear.gif"},{"forecastID":46,"day":28,"month":5,"year":2018,"yday":147,"hour":19,"monthName":"May","weekday":"Monday","ampm":"PM","tzShort":"America/Argentina/Cordoba","tzLong":"-03","highT":21.0,"lowT":18.0,"aveWindHPH":23.0,"aveWindDir":"N","aveWindDegrees":0.0,"precipAllDay":"17","aveHumidity":84.0,"conditions":"Thunderstorm","iconURL":"http://icons.wxug.com/i/c/k/tstorms.gif"},{"forecastID":46,"day":29,"month":5,"year":2018,"yday":148,"hour":19,"monthName":"May","weekday":"Tuesday","ampm":"PM","tzShort":"America/Argentina/Cordoba","tzLong":"-03","highT":21.0,"lowT":14.0,"aveWindHPH":23.0,"aveWindDir":"NNW","aveWindDegrees":347.0,"precipAllDay":"7","aveHumidity":82.0,"conditions":"Rain","iconURL":"http://icons.wxug.com/i/c/k/rain.gif"}]},{"id":47,"target":"something","country":"Argentina","city":"Buenos Aires","latitude":"-34.61000061","longitude":"-58.36999893","extended":[{"forecastID":47,"day":3,"month":1,"year":2018,"yday":2,"hour":12,"monthName":"January","weekday":"Wednesday","ampm":"PM","tzShort":"America/Argentina/Cordoba","tzLong":"-03","highT":30.0,"lowT":24.0,"aveWindHPH":0.0,"aveWindDir":"","aveWindDegrees":0.0,"precipAllDay":"0","aveHumidity":0.0,"conditions":"Partly Cloudy","iconURL":"http://icons.wxug.com/i/c/k/partlycloudy.gif"},{"forecastID":47,"day":4,"month":1,"year":2018,"yday":3,"hour":12,"monthName":"January","weekday":"Thursday","ampm":"PM","tzShort":"America/Argentina/Cordoba","tzLong":"-03","highT":36.0,"lowT":23.0,"aveWindHPH":0.0,"aveWindDir":"","aveWindDegrees":0.0,"precipAllDay":"0","aveHumidity":0.0,"conditions":"Clear","iconURL":"http://icons.wxug.com/i/c/k/clear.gif"},{"forecastID":47,"day":5,"month":1,"year":2018,"yday":4,"hour":12,"monthName":"January","weekday":"Friday","ampm":"PM","tzShort":"America/Argentina/Cordoba","tzLong":"-03","highT":24.0,"lowT":18.0,"aveWindHPH":0.0,"aveWindDir":"","aveWindDegrees":0.0,"precipAllDay":"0","aveHumidity":0.0,"conditions":"Chance of Rain","iconURL":"http://icons.wxug.com/i/c/k/chancerain.gif"},{"forecastID":47,"day":6,"month":1,"year":2018,"yday":5,"hour":12,"monthName":"January","weekday":"Saturday","ampm":"PM","tzShort":"America/Argentina/Cordoba","tzLong":"-03","highT":27.0,"lowT":20.0,"aveWindHPH":0.0,"aveWindDir":"","aveWindDegrees":0.0,"precipAllDay":"0","aveHumidity":0.0,"conditions":"Clear","iconURL":"http://icons.wxug.com/i/c/k/clear.gif"}]},{"id":48,"target":"something","country":"Uruguay","city":"Uruguay","latitude":"-32.47999954","longitude":"-53.52000046","extended":[{"forecastID":48,"day":8,"month":6,"year":2018,"yday":158,"hour":19,"monthName":"June","weekday":"Friday","ampm":"PM","tzShort":"America/Montevideo","tzLong":"-03","highT":15.0,"lowT":5.0,"aveWindHPH":16.0,"aveWindDir":"NW","aveWindDegrees":312.0,"precipAllDay":"0","aveHumidity":59.0,"conditions":"Clear","iconURL":"http://icons.wxug.com/i/c/k/clear.gif"},{"forecastID":48,"day":9,"month":6,"year":2018,"yday":159,"hour":19,"monthName":"June","weekday":"Saturday","ampm":"PM","tzShort":"America/Montevideo","tzLong":"-03","highT":19.0,"lowT":9.0,"aveWindHPH":10.0,"aveWindDir":"N","aveWindDegrees":3.0,"precipAllDay":"0","aveHumidity":72.0,"conditions":"Clear","iconURL":"http://icons.wxug.com/i/c/k/clear.gif"},{"forecastID":48,"day":10,"month":6,"year":2018,"yday":160,"hour":19,"monthName":"June","weekday":"Sunday","ampm":"PM","tzShort":"America/Montevideo","tzLong":"-03","highT":24.0,"lowT":17.0,"aveWindHPH":13.0,"aveWindDir":"NNE","aveWindDegrees":28.0,"precipAllDay":"4","aveHumidity":82.0,"conditions":"Thunderstorm","iconURL":"http://icons.wxug.com/i/c/k/tstorms.gif"},{"forecastID":48,"day":11,"month":6,"year":2018,"yday":161,"hour":19,"monthName":"June","weekday":"Monday","ampm":"PM","tzShort":"America/Montevideo","tzLong":"-03","highT":23.0,"lowT":11.0,"aveWindHPH":26.0,"aveWindDir":"NW","aveWindDegrees":316.0,"precipAllDay":"5","aveHumidity":88.0,"conditions":"Thunderstorm","iconURL":"http://icons.wxug.com/i/c/k/tstorms.gif"}]}];
    return this.http.get(this.url);
  }

}
