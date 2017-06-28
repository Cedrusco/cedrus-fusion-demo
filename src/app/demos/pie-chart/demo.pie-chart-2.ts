import { Component } from '@angular/core';
import { PieChartModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-pie-chart-2',
	templateUrl: './demo.pie-chart-2.html',
 	styleUrls: ['./demo.pie-chart-2.scss']
})

export class CfDemoPieChart2 {
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
		donut: true,
		data: this.data
	});

	chartClick(event): void {
		console.log('Chart clicked: ', event);
	}
}
