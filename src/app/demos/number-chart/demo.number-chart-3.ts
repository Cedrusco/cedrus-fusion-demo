import { Component } from '@angular/core';

@Component ({
  selector: 'cf-demo-number-chart-3',
  templateUrl: './demo.number-chart-3.html',
  styleUrls: ['./demo.number-chart-3.scss']
})

export class CfDemoNumberChart3 {
  data = [
    { "name": "Germany", "value": 8940000 },
    { "name": "USA", "value": 5000000 },
    { "name": "France", "value": 7200000 }
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
