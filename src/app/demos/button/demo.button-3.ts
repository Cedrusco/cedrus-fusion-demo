import { Component } from '@angular/core';
import { IconModel } from 'cedrus-fusion';
import { ButtonModel } from 'cedrus-fusion';
import { SelectableModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-button-3',
	templateUrl: './demo.button-3.html',
	styleUrls: ['./demo.button-3.scss']
})
export class CfDemoButton3 {

	wait: boolean = false;
	disable: boolean = false;
	state: string = "";
	waitingIcon = new IconModel ({
		name: "fa-spinner",
		type: "fa",
		size: "20px"
	});

	waitingBtn= new ButtonModel ({
			label: "Waiting BTN",
			iconPosition:"right",
			waiting: {
				value: this.wait,
				disabled: this.disable,
				iconProperty: this.waitingIcon
			}
		});
	waitingCheckbox = new SelectableModel ({
		value: true,
		item: 'Toggle waiting'
	});
	disableCheckbox = new SelectableModel ({
		value: true,
		item: 'Toggle disable'
	});
	
	updateState(): void {
		if(this.waitingBtn.waiting.value) this.state = "Waiting State";
		else this.state="Active State";
	}
}
