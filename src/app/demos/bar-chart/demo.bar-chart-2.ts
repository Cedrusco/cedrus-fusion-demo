import { Component } from '@angular/core';
import { BarChartModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-bar-chart-2',
	templateUrl: './demo.bar-chart-2.html',
 	styleUrls: ['./demo.bar-chart-2.scss']
})

export class CfDemoBarChart2 {
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

	barChartModel = new BarChartModel({
		orientation: 'horizontal',
		data: this.data
	});

	chartClick(event): void {
		console.log('Chart clicked: ', event);
	}
}
