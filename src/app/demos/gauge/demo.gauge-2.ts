import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { GaugeModel, ButtonModel } from 'cedrus-fusion';
import { GaugeStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-gauge-2',
	templateUrl: './demo.gauge-2.html',
 	styleUrls: ['./demo.gauge-2.scss']
})
export class CfDemoGauge2 implements OnInit, OnDestroy {

	showValue = 9997;
	goal = 10000;

	myGauge1 = new GaugeModel({
		max: this.goal,
		type: 'full',
		size: 150,
		label: 'steps today',
		animationDuration: 1,
		inputValue: true,
		disable: false
	});

	stepButton = new ButtonModel({
		label: "Take a step"
	});

	takeStep(): void {
		this.showValue++;
	}

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
