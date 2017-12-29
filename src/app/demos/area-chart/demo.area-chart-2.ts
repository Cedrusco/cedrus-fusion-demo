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
		optionsSource: 'fromModel',
		options: [
			{value: 'air', label: 'air'},
			{value: 'aqua', label: 'aqua'},
			{value: 'cool', label: 'cool'},
			{value: 'fire', label: 'fire'},
			{value: 'flame', label: 'flame'},
			{value: 'forest', label: 'forest'},
			{value: 'horizon', label: 'horizon'},
			{value: 'natural', label: 'natural'},
			{value: 'neons', label: 'neons'},
			{value: 'night', label: 'night'},
			{value: 'nightLights', label: 'nightLights'},
			{value: 'ocean', label: 'ocean'},
			{value: 'picnic', label: 'picnic'},
			{value: 'solar', label: 'solar'},
			{value: 'vivid', label: 'vivid'},
		]
	});
	setScheme(name) {
		this.currentScheme = name;
	}
}
