import { Component, OnInit, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-button-1',
	templateUrl: './demo.button-1.html',
	styleUrls: ['./demo.button-1.scss']
})
export class CfDemoButton1 implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	function1(): void {
		alert('This is Button 1 speaking...');
	}
	function2(): void {
		alert('This is Button 2 speaking...');
	}
}
