import { Component } from '@angular/core';
import { IconModel, ButtonModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-button-3',
	templateUrl: './demo.button-3.html',
	styleUrls: ['./demo.button-3.scss']
})
export class CfDemoButton3 {

	state: string = "";

	waitingBtn = new ButtonModel({
		label: "Waiting BTN",
		iconPosition:"right",
		iconProperty: { display: false },
		waiting: {
			value: false,
			disabled: false,
			iconProperty: new IconModel({ name: "fa-spinner", size: "20px" })
		}
	});

	clicks = [];
	clicked(): void { this.clicks.push('clicked'); }

	toggle(value, type) {
		switch (type) {
			case "wait": 
				this.waitingBtn.waiting.value = value; 
				this.waitingBtn.waiting.iconProperty.display = value;
				break;
			case "wait-disable": 
				this.waitingBtn.waiting.disabled = value; 
				break;
			case "disable": 
				this.waitingBtn.disable = value; 
				break;
		}

		if((this.waitingBtn.waiting.value && this.waitingBtn.waiting.disabled && this.waitingBtn.disable) || (this.waitingBtn.waiting.value && !this.waitingBtn.waiting.disabled && this.waitingBtn.disable)) this.state = 'Button is in WAITING state and disabled by standard DISABLE property';
		if(this.waitingBtn.waiting.value && this.waitingBtn.waiting.disabled && !this.waitingBtn.disable) this.state = 'Button is in WAITING state and disabled by WAITING DISABLE property';		
		if(this.waitingBtn.waiting.value && !this.waitingBtn.waiting.disabled && !this.waitingBtn.disable) this.state = 'Button is ACTIVE in WAITING state';
		if(!this.waitingBtn.waiting.value && !this.waitingBtn.waiting.disabled && !this.waitingBtn.disable) this.state = 'Button is ACTIVE';
		if(!this.waitingBtn.waiting.value && this.waitingBtn.waiting.disabled && !this.waitingBtn.disable) this.state = 'Button is ACTIVE and can\'t be disabled without being in WAITING';
		if(!this.waitingBtn.waiting.value && this.waitingBtn.waiting.disabled && this.waitingBtn.disable) this.state = 'Button is ACTIVE and disabled';
		if(!this.waitingBtn.waiting.value && !this.waitingBtn.waiting.disabled && this.waitingBtn.disable) this.state = 'Button is ACTIVE and disabled';
		
	}
}
