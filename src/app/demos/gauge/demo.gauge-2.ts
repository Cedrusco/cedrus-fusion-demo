import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-gauge-2',
	templateUrl: './demo.gauge-2.html',
 	styleUrls: ['./demo.gauge-2.scss']
})
export class CfDemoGauge2 {
	
	log(value, index) {
		console.log('value, index', value, index);
	}
}
