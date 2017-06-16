import { Component} from '@angular/core';
import { SelectableModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-switch-3',
	templateUrl: './demo.switch-3.html',
	styleUrls: ['./demo.switch-3.scss']
})

export class CfDemoSwitch3{
	
	myAccounts: SelectableModel[]=[
		new SelectableModel({value: 'usd', item: { name: 'USD', code: 'fa-usd', color: '#4caf50'}, checked: false }),
		new SelectableModel({value: 'eur', item: { name: 'EURO', code: 'fa-eur', color: '#309be3'}, checked: false }),
		new SelectableModel({value: 'gbp', item: { name: 'GBP', code: 'fa-gbp', color: '#7a73a9'}, checked: false })
	];
}
