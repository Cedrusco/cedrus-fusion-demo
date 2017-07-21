import { Component } from '@angular/core';
import { BarChartModel, ChartStylingModel, SelectModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-bar-chart-2',
	templateUrl: './demo.bar-chart-2.html',
 	styleUrls: ['./demo.bar-chart-2.scss']
})

export class CfDemoBarChart2 {
	data = [
		{ "name": "Germany",	"value": 8940000 },
		{ "name": "USA",			"value": 5000000 },
		{ "name": "France",		"value": 7200000 }
	];

	barChartModel = new BarChartModel({
		data: this.data,
		gradient: true,
		showLegend: false,
		orientation: 'horizontal',
		colorScheme: {
			'domain': ["lightseagreen", "mediumseagreen", "seagreen"]
		}
	});

	chartStyle = new ChartStylingModel({
		width: '500px',
		container: { class: 'mat-card chart-demo' }
	})

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
