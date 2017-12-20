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

	staticIcon = {
    name: 'account_balance',
    type: 'mi',
    // TODO - why do I need to declare these below - should be default
    size: '24px',
    display: true,
    disable: false
  };

	myAccounts = new SelectModel({
		placeholder: 'Select currency: ',
		selected: this.myCurrency,
		showIcon: true,
		iconChangeable: false,
		iconProperty: this.staticIcon
	});

	selectIconChangeable(e) {
		this.myAccounts.iconChangeable = e;
		if(!e) this.myAccounts.iconProperty = this.staticIcon;
	}

}
