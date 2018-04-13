import { Component } from '@angular/core';
import { NumberChartModel, ChartStylingModel, SelectModel } from 'cedrus-fusion';

@Component ({
  selector: 'cf-demo-number-chart-2',
  templateUrl: './demo.number-chart-2.html',
  styleUrls: ['./demo.number-chart-2.scss']
})

export class CfDemoNumberChart2 {
  data = [
    { "name": "Germany", "value": 8940000 },
    { "name": "USA", "value": 5000000 },
    { "name": "France", "value": 7200000 }
  ];

  numberChartModel = new NumberChartModel({
    data: this.data,
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
