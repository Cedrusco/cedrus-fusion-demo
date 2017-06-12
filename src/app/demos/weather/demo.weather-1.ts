import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { WeatherComponentModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-weather-1',
	templateUrl: './demo.weather-1.html',
	styleUrls: ['./demo.weather-1.scss']
})

export class CfDemoWeather1 implements OnInit, OnDestroy {

	/**
	 * <p> Initialize the weather component with a Weather Component Model and pass it to the settings.</p>
	 */
	demoWeather = new WeatherComponentModel ({
		defaultCity:"Paris"
	});

	constructor() {
	}

	ngOnInit() {
	}
	ngOnDestroy() {
	}

	compEvents: string= "";

	log(ev): void { this.compEvents = ev; }
}
