import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-gauge-2',
	templateUrl: './demo.gauge-2.html',
 	styleUrls: ['./demo.gauge-2.scss']
})
export class CfDemoGauge2 {
	full: number;
	arch: number;
	semi: number;

	logFull(value) {this.full = value;}
	logArch(value) {this.arch = value;}
	logSemi(value) {this.semi = value;}
}
