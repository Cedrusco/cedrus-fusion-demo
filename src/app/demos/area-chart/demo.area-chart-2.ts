import { Component } from '@angular/core';
import { AreaChartModel, ChartStylingModel, SelectModel } from 'cedrus-fusion';

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
	      { "name": "2010", "value": 7300000 },
	      { "name": "2011", "value": 8940000 }
	    ]
	  },
	  {
	    "name": "USA",
	    "series": [
	      { "name": "2010", "value": 7870000 },
	      { "name": "2011", "value": 8270000 }
	    ]
	  },
	  {
	    "name": "France",
	    "series": [
	      { "name": "2010", "value": 5000002 },
	      { "name": "2011", "value": 5800000 }
	    ]
	  }
	];

	areaChartModel = new AreaChartModel({
		stacked: true,
		data: this.dataMulti,
		colorScheme: {
			'domain': ["lightseagreen", "mediumseagreen", "seagreen"]
		}
	});

	chartStyle = new ChartStylingModel({
		container: { class: 'chart-demo mat-card' }
	});
	
	currentScheme;
	colorSchemes = new SelectModel ({
		placeholder: 'Color scheme palettes: ',
		items: [
			{itemValue: 'air', itemLabel: 'air'},
			{itemValue: 'aqua', itemLabel: 'aqua'},
			{itemValue: 'cool', itemLabel: 'cool'},
			{itemValue: 'fire', itemLabel: 'fire'},
			{itemValue: 'flame', itemLabel: 'flame'},
			{itemValue: 'forest', itemLabel: 'forest'},
			{itemValue: 'horizon', itemLabel: 'horizon'},
			{itemValue: 'natural', itemLabel: 'natural'},
			{itemValue: 'neons', itemLabel: 'neons'},
			{itemValue: 'night', itemLabel: 'night'},
			{itemValue: 'nightLights', itemLabel: 'nightLights'},
			{itemValue: 'ocean', itemLabel: 'ocean'},
			{itemValue: 'picnic', itemLabel: 'picnic'},
			{itemValue: 'solar', itemLabel: 'solar'},
			{itemValue: 'vivid', itemLabel: 'vivid'},
		]
	});
	setScheme(name) {
		this.currentScheme = name;
	}
}
