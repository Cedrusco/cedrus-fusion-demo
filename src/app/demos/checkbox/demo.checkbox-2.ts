import { Component, OnInit } from '@angular/core';
import { NotificationModel } from 'cedrus-fusion';
import { SelectableModel } from 'cedrus-fusion';
import { CheckboxStylingModel } from 'cedrus-fusion';
import { ButtonModel } from 'cedrus-fusion';
import { Themes } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-checkbox-2',
	templateUrl: './demo.checkbox-2.html',
	styleUrls: ['./demo.checkbox-2.scss']
})

export class CfDemoCheckbox2 implements OnInit {
	title: string = "CF Demo Checkbox 1 (with labelPosition = 'before' and button theme colors)";
	title2: string = "CF Demo Checkbox 2 (with HTML options)";
	title3: string = "CF Demo Checkbox 3 (with images)";
	isVisible: boolean = true;
	isDisable: boolean = true;

	fruits: Object[];

	checkbox1: SelectableModel[] = [];
	checkboxStyling1: CheckboxStylingModel[] = [];

	myAccounts: SelectableModel[];

	avatars: SelectableModel[];

	letters = 0;
  myNotifications: NotificationModel = {
    value: this.letters
  };
  sender = new ButtonModel({
    label: "Send mail",
  });
  sendMessage() { ++this.myNotifications.value; }

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
			this.checkbox1.push(new SelectableModel({itemPosition: "before"}));
		this.checkboxStyling1.push(
			new CheckboxStylingModel({checkbox:{themeColor:"primary"}}),
			new CheckboxStylingModel({checkbox:{themeColor:"accent"}}),
			new CheckboxStylingModel({checkbox:{themeColor:"warn"}})
		)

		this.myAccounts = [
			new SelectableModel({value: 'usd', item: { name: 'USD', code: 'fa-usd', color: '#4caf50'}, checked: true }),
			new SelectableModel({value: 'eur', item: { name: 'EURO', code: 'fa-eur', color: '#309be3'}, checked: false }),
			new SelectableModel({value: 'gbp', item: { name: 'GBP', code: 'fa-gbp', color: '#7a73a9'}, checked: false })
		];
		this.avatars= [
			new SelectableModel({value: 'bob', item: 'http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png', checked: true }),
			new SelectableModel({value: 'ann', item: 'http://findicons.com/files/icons/1072/face_avatars/300/fh04.png', checked: true }),
			new SelectableModel({value: 'ted', item: 'http://clipartist.net/RSS/openclipart.org/Unity/hypermodern_avatar_wall_paper_art-1979px.png', checked: true }),
		];
	}
}
