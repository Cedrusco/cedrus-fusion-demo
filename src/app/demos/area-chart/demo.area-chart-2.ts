import { Component } from '@angular/core';
import { AreaChartModel } from 'cedrus-fusion';

@Component ({
	selector: 'cf-demo-area-chart-2',
	templateUrl: './demo.area-chart-2.html',
 	styleUrls: ['./demo.area-chart-2.scss']
})

export class CfDemoAreaChart2 {
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

	areaChartModel = new AreaChartModel({
		stacked: true,
		data: this.dataMulti
	});

	chartClick(event): void {
		console.log('Chart clicked: ', event);
	}
}
