import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { GaugeModel } from 'cedrus-fusion';
import { GaugeStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-gauge-1',
	templateUrl: './demo.gauge-1.html',
 	styleUrls: ['./demo.gauge-1.scss']
})
export class CfDemoGauge1 implements OnInit, OnDestroy {

	myGauge1 = new GaugeModel({
		max: 100,
		value: 65,
		type: 'full',
		size: 150,
		suffix: 'suffix',
		label: 'type: full',
		animationDuration: 1,
		inputValue: false,
		disable: true
	});

	myGauge2 = new GaugeModel({
		max: 100,
		value: 65,
		type: 'arch',
		size: 150,
		prefix: 'prefix',
		label: 'type: arch',
		animationDuration: 2
	});

	myGauge3 = new GaugeModel({
		max: 100,
		value: 65,
		type: 'semi',
		size: 150,
		label: 'type: semi',
		animationDuration: 3
	});

	myGaugeStyling = new GaugeStylingModel({
		container: {
			class: 'my-gauge-container-class'
		},
		gauge: {
			class: 'my-gauge-element-class'
		},
		valueContainer: {
			class: 'my-value-container-class'
		},
		value: {
			class: 'my-gauge-value-class'
		},
		prefix: {
			class: 'my-gauge-prefix-class'
		},
		suffix: {
			class: 'my-gauge-suffix-class'
		},
		label: {
			class: 'my-gauge-label-class'
		},
	});

  interval: number;

  ngOnInit(): void {

    // const updateValues: Function = (): void => {
    //   this.myGauge1.value = Math.round(Math.random() * 100);
    //   this.myGauge2.value = Math.round(Math.random() * 100);
    //   this.myGauge3.value = Math.round(Math.random() * 100);
    // };

    // const INTERVAL: number = 5000;

    // this.interval = setInterval(updateValues, INTERVAL);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
