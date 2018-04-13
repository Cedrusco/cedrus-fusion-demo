import { Component } from '@angular/core';

@Component ({
  selector: 'cf-demo-number-chart-1',
  templateUrl: './demo.number-chart-1.html',
  styleUrls: ['./demo.number-chart-1.scss']
})

export class CfDemoNumberChart1 {
  
  data = [
    { "name": "Germany", "value": 8940000 },
    { "name": "USA", "value": 5000000 },
    { "name": "France", "value": 7200000 }
  ];
  
}
