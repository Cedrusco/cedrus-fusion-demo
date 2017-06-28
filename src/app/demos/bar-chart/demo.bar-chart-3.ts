import { Component } from '@angular/core';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-bar-chart-3',
	templateUrl: './demo.bar-chart-3.html',
 	styleUrls: ['./demo.bar-chart-3.scss']
})

export class CfDemoBarChart3 {
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
