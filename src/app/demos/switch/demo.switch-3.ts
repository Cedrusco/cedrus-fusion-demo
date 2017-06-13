import { Component, OnInit } from '@angular/core';
import { ButtonModel } from 'cedrus-fusion';
import { NotificationModel } from 'cedrus-fusion';
import { SelectableModel } from 'cedrus-fusion';
import { SwitchStylingModel } from 'cedrus-fusion';
import { Themes } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-switch-3',
	templateUrl: './demo.switch-3.html',
	styleUrls: ['./demo.switch-3.scss']
})

export class CfDemoSwitch3 implements OnInit {
	title: string = "CF Demo Switch 1 (with labelPosition = 'before' and button theme colors)";
	title2: string = "CF Demo Switch 2 (with HTML options) anf Grouping";
	title3: string = "CF Demo Switch 3 (with images)";
	isVisible: boolean = true;
	isDisable: boolean = true;

	fruits: Object[];

	switch1: SelectableModel[] = [];
	switchStyling1: SwitchStylingModel[] = [];

	myAccounts: SelectableModel[];

	avatars: SelectableModel[];

	checkedAvatars = [];

	avIndex = 0;
	toggleAvatars(): void {
		switch(this.avIndex) {
			case 0: this.checkedAvatars[0] = this.checkedAvatars[0] === 'bob' ? 'not-bob' : 'bob'; this.avIndex = 1; break;
			case 1: this.checkedAvatars[1] = this.checkedAvatars[1] === 'ann' ? 'not-ann' : 'ann'; this.avIndex = 2; break;
			case 2: this.checkedAvatars[2] = this.checkedAvatars[2] === 'ted' ? 'not-ted' : 'ted'; this.avIndex = 0; break;
		}
	}
	letters = 0;
  myNotifications: NotificationModel = {
    value: this.letters,
    classes: 'mat-accent',
  };
  sender = new ButtonModel({
    label: "Send mail",
    color: {
      foreground: "",
      background: "primary"
    },
    icon: null,
    icon_position:"right"
  });
  sendMessage() { ++this.myNotifications.value; }

	constructor() {}
	ngOnInit() {

		this.fruits = [
			{value:"apl", item: 'Apple (themeColor)', checked:true},
			{value: 'wtm', item: 'Watermelon (themeColor and will show/hide avatars)', checked:true},
			{value: 'ban', item: 'Banana (primary)', checked:true},
			{value: 'lim', item: 'Lime (accent)', checked:false},
			{value: 'per', item: 'Pear (warn)', checked:true}
		];
		for(let item of this.fruits)
			this.switch1.push(new SelectableModel({itemPosition: "before"}));
		this.switchStyling1.push(
			new SwitchStylingModel({switch:{themeColor:"primary"}}),
			new SwitchStylingModel({switch:{themeColor:"accent"}}),
			new SwitchStylingModel({switch:{themeColor:"warn"}})
		)

		this.myAccounts = [
			new SelectableModel({value: 'usd', item: { name: 'USD', code: 'fa-usd', color: '#4caf50'}, checked: false }),
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
