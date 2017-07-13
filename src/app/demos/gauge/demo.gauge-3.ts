import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { GaugeModel } from 'cedrus-fusion';
import { GaugeStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-gauge-3',
	templateUrl: './demo.gauge-3.html',
 	styleUrls: ['./demo.gauge-3.scss']
})
export class CfDemoGauge3 {

	myGauge = new GaugeModel({
		max: 100,
		value: 35,
		type: 'arch',
		size: 200,
		prefix: 'prefix',
		label: 'Styled gauge',
		animationDuration: 0.5
	});

	myGaugeStyling = new GaugeStylingModel({
		container: { class: 'my-gauge-container-class' },
		gauge: { class: 'my-gauge-element-class' },
		value: { class: 'my-gauge-value-class' },
		prefix: { class: 'my-gauge-prefix-class' },
		suffix: { class: 'my-gauge-suffix-class' },
		label: { class: 'my-gauge-label-class' },
	});

	log(value) {
		console.log('value', value);
	}
}