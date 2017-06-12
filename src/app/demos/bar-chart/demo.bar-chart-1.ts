import { Component, OnInit, Input, ElementRef } from '@angular/core';

import { CfCoreComponent } from 'cedrus-fusion';
import { BarChartModel, BAR_CHART_ORIENTATION } from 'cedrus-fusion';
import { StylingModel } from 'cedrus-fusion';
import { ChartStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-bar-chart-1',
	templateUrl: './demo.bar-chart-1.html',
 	styleUrls: ['./demo.bar-chart-1.scss']
})

export class CfDemoBarChart1 extends CfCoreComponent implements OnInit {
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

	dataMulti = [
	  {
	    "name": "Germany",
	    "series": [
	      {
	        "name": "2010",
	        "value": 7300000
	      },
	      {
	        "name": "2011",
	        "value": 8940000
	      }
	    ]
	  },
	  {
	    "name": "USA",
	    "series": [
	      {
	        "name": "2010",
	        "value": 7870000
	      },
	      {
	        "name": "2011",
	        "value": 8270000
	      }
	    ]
	  },
	  {
	    "name": "France",
	    "series": [
	      {
	        "name": "2010",
	        "value": 5000002
	      },
	      {
	        "name": "2011",
	        "value": 5800000
	      }
	    ]
	  }
	];

	barChartModel: BarChartModel = {
		orientation: BAR_CHART_ORIENTATION.horizontal,
		data: this.data
	};

	chartStylingModel = new ChartStylingModel({
		width: '100%',
		height: '200px'
 	});

	constructor(public elementRef: ElementRef) {
		super(elementRef);
	}

	ngOnInit() {}

	chartClick(event): void {
		console.log('Chart clicked: ', event);
	}
}
