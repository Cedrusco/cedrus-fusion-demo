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
	myAccounts = new SelectModel ({
		placeholder: 'Select currency: ',
		items: [
			{itemValue: 'usd', itemLabel: '<b style="color: #4caf50"><span style="margin-right: 8px" class="fa fa-usd"></span>USD</b>'},
			{itemValue: 'eur', itemLabel: '<b style="color: #309be3"><span style="margin-right: 8px" class="fa fa-eur"></span>EURO</b>'},
			{itemValue: 'gbp', itemLabel: '<b style="color: #7a73a9"><span style="margin-right: 8px" class="fa fa-gbp"></span>GBP</b>'}
		],
		selected: this.myCurrency,
		showFilter: false
	});
}
