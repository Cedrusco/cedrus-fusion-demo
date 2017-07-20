import { Component } from '@angular/core';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-pie-chart-1',
	templateUrl: './demo.pie-chart-1.html',
 	styleUrls: ['./demo.pie-chart-1.scss']
})

export class CfDemoPieChart1 {
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

	chartClick(event): void {
		console.log('Chart clicked: ', event);
	}
}
