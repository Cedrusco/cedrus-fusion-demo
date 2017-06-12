import { Component, OnInit, Input, ElementRef } from '@angular/core';

import { CfCoreComponent } from 'cedrus-fusion';
import { PieChartModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-pie-chart-1',
	templateUrl: './demo.pie-chart-1.html',
 	styleUrls: ['./demo.pie-chart-1.scss']
})

export class CfDemoPieChart1 extends CfCoreComponent implements OnInit {
	size = {
		width: '100%',
		height: '200px'
	};

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

	pieChartModel: PieChartModel = {
		donut: true,
		data: this.data
	};

	constructor(public elementRef: ElementRef) {
		super(elementRef);
	}

	ngOnInit() {}

	chartClick(event): void {
		console.log('Chart clicked: ', event);
	}
}
