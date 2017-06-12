import { Component, OnInit, Input, ElementRef } from '@angular/core';

import { CfCoreComponent } from 'cedrus-fusion';
import { AreaChartModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-area-chart-1',
	templateUrl: './demo.area-chart-1.html',
 	styleUrls: ['./demo.area-chart-1.scss']
})

export class CfDemoAreaChart1 extends CfCoreComponent implements OnInit {
	size = {
		width: '100%',
		height: '200px'
	};

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

	areaChartModel: AreaChartModel = {
		stacked: true,
		data: this.dataMulti
	};

	constructor(public elementRef: ElementRef) {
		super(elementRef);
	}

	ngOnInit() {}

	chartClick(event): void {
		console.log('Chart clicked: ', event);
	}
}
