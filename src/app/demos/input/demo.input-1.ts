import { Component } from '@angular/core';
import { InputModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-input-1',
	templateUrl: './demo.input-1.html',
 	styleUrls: ['./demo.input-1.scss']
})

export class CfDemoInput1 {
	inputProperties = new InputModel();
}
