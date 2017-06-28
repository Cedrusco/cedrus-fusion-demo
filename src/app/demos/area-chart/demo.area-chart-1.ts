import { Component } from '@angular/core';

@Component ({
	selector: 'cf-demo-area-chart-1',
	templateUrl: './demo.area-chart-1.html',
 	styleUrls: ['./demo.area-chart-1.scss']
})

export class CfDemoAreaChart1 {
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

	chartClick(event): void {
		console.log('Chart clicked: ', event);
	}
}
