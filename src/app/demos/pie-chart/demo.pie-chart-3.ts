import { Component } from '@angular/core';
import { PieChartModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-pie-chart-3',
	templateUrl: './demo.pie-chart-3.html',
 	styleUrls: ['./demo.pie-chart-3.scss']
})

export class CfDemoPieChart3 {
	data = [
		{
			"name": "Germany",
			"value": 8940000
		},
		{
			"name": "USA",
			"value": 5000000
		},
		{
			"name": "France",
			"value": 7200000
		}
	];

	pieChartModel = new PieChartModel({
		data: this.data,
		legendPosition: 'bottom'
	});

	chartEvents = [];

	chartClick(e): void {
		var message = '';
		console.log('Chart clicked: ', e);
		if(typeof e === 'string') {
			message = 'You just clicked on legend item: ' + e;
		} else {
			if (e.hasOwnProperty('series')) {
				message = 'You just clicked on country ' + e.series + ' and its demo benchmark in ' + e.name + ' was ' + e.value;
			} else {
				message = 'You just clicked on country ' + e.name + ' and its demo benchmark is ' + e.value;				
			}
		}

		this.chartEvents.push(message);
	}
}
