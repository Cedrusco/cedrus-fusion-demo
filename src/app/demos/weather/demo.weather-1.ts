import { Component } from '@angular/core';

import { WeatherComponentModel } from 'cedrus-fusion-business';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-weather-1',
	templateUrl: './demo.weather-1.html',
 	styleUrls: ['./demo.weather-1.scss']
})
export class CfDemoWeather1 {
  demoWeather = new WeatherComponentModel ({
		defaultCity:"Paris"
	});
  
  compEvents: string= "";
  log(ev): void { this.compEvents = ev; }

}