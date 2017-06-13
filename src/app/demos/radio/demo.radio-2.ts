import { Component, OnInit } from '@angular/core';
import { ButtonModel } from 'cedrus-fusion';
import { NotificationModel } from 'cedrus-fusion';
import { SelectableModel } from 'cedrus-fusion';
import { RadioStylingModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-radio-2',
	templateUrl: './demo.radio-2.html',
	styleUrls: ['./demo.radio-2.scss']
})

export class CfDemoRadio2 implements OnInit {
	title = "CF Demo Radio 1";
	title2 = "CF Demo Radio 2 (with HTML options and labels after buttons)";
	isVisible = false;
	isDisable = true;

	fruits: Object[];

	radio1: SelectableModel[] = [];
	radioStyling1: RadioStylingModel[] = [];

	myAccounts: SelectableModel[];

	constructor() {}
	ngOnInit() {

		this.fruits = [
			{value:"apl", item: 'Apple (themeColor)', checked:false},
			{value: 'wtm', item: 'Watermelon (themeColor and will show/hide avatars)', checked:false},
			{value: 'ban', item: 'Banana (primary)', checked:false},
			{value: 'lim', item: 'Lime (accent)', checked:false},
			{value: 'per', item: 'Pear (warn)', checked:false}
		];
		for(let item of this.fruits)
			this.radio1.push(new SelectableModel({itemPosition: "before"}));
		this.radioStyling1.push(
			new RadioStylingModel({radio:{themeColor:"primary"}}),
			new RadioStylingModel({radio:{themeColor:"accent"}}),
			new RadioStylingModel({radio:{themeColor:"warn"}})
		)

		this.myAccounts = [
			new SelectableModel({value: 'usd', item: { name: 'USD', code: 'fa-usd', color: '#4caf50'}, checked: true }),
			new SelectableModel({value: 'eur', item: { name: 'EURO', code: 'fa-eur', color: '#309be3'}, checked: false }),
			new SelectableModel({value: 'gbp', item: { name: 'GBP', code: 'fa-gbp', color: '#7a73a9'}, checked: false })
		];
	}
}
