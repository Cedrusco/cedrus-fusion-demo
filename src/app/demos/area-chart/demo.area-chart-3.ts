import { Component } from '@angular/core';

@Component ({
	selector: 'cf-demo-area-chart-3',
	templateUrl: './demo.area-chart-3.html',
 	styleUrls: ['./demo.area-chart-3.scss']
})

export class CfDemoAreaChart3 {
	dataMulti = [
	  {
	    "name": "Germany (with some long description text to the item )",
	    "series": [
	      { "name": "2010", "value": 7300000 },
	      { "name": "2011", "value": 8940000 }
	    ]
	  },
	  {
	    "name": "USA (with some long description text to the item )",
	    "series": [
	      { "name": "2010", "value": 7870000 },
	      { "name": "2011", "value": 8270000 }
	    ]
	  },
	  {
	    "name": "France (with some long description text to the item )",
	    "series": [
	      { "name": "2010", "value": 5000002 },
	      { "name": "2011", "value": 5800000 }
	    ]
	  }
	];

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
