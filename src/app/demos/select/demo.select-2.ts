import { Component } from '@angular/core';
import { SelectModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-select-2',
	templateUrl: './demo.select-2.html',
	styleUrls: ['./demo.select-2.scss']
})

export class CfDemoSelect2 {
	
	myCurrency: string = 'usd';

	myAccounts = new SelectModel({
		placeholder: 'Select currency: ',
		selected: this.myCurrency,
		// showIcon: true,
		// iconChangeable: true
	});

}
