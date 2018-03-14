import { Component } from '@angular/core';
import { SelectableModel } from 'cedrus-fusion';
import { SelectableStylingModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-radio-2',
	templateUrl: './demo.radio-2.html',
	styleUrls: ['./demo.radio-2.scss']
})

export class CfDemoRadio2 {
	
	radioStyling: SelectableStylingModel[] = [
		new SelectableStylingModel({container:{class:"shift"},button:{class:"usd"}}),
		new SelectableStylingModel({container:{class:"shift"},button:{class:"euro"}}),
		new SelectableStylingModel({container:{class:"shift"},button:{class:"gbp"}})
	];
	myAccounts: SelectableModel[] = [
		new SelectableModel({value: 'usd', item: { name: 'USD', code: 'fa-usd', color: '#4caf50'}, checked: false }),
		new SelectableModel({value: 'eur', item: { name: 'EURO', code: 'fa-eur', color: '#309be3'}, checked: false }),
		new SelectableModel({value: 'gbp', item: { name: 'GBP', code: 'fa-gbp', color: '#7a73a9'}, checked: false })
	];
}
