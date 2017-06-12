import { Component, OnInit } from '@angular/core';
import { ButtonModel } from 'cedrus-fusion';
import { NotificationModel } from 'cedrus-fusion';
import { SelectModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-select-1',
	templateUrl: './demo.select-1.html',
	styleUrls: ['./demo.select-1.scss']
})

export class CfDemoSelect1 implements OnInit {
	title: string = "CF Demo Select 1 (with filter)";
	title2: string = "CF Demo Select 1 (with HTML options)";
	isVisible: Boolean = true;
	isDisable: Boolean = false;
	isRequired: Boolean = true;
	selectEvents: Array<any> = [];

	log(ev): void { this.selectEvents.push(ev); }

	myFruits = new SelectModel ({
		placeholder: 'Selected fruit is: ',
		items: [
			{itemValue: 'apl', itemLabel: 'Apple'},
			{itemValue: 'ban', itemLabel: 'Banana'},
			{itemValue: 'wtm', itemLabel: 'Watermelon'},
			{itemValue: 'per', itemLabel: 'Pear'},
			{itemValue: 'pec', itemLabel: 'Peach'},
			{itemValue: 'org', itemLabel: 'Orange'},
			{itemValue: 'man', itemLabel: 'Mango'},
			{itemValue: 'gra', itemLabel: 'Grapes'},
			{itemValue: 'lim', itemLabel: 'Lime'},
			{itemValue: 'lem', itemLabel: 'Lemon'}
		],
		selected: '',
		showFilter: true
	});

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

	letters = 0;
  myNotifications: NotificationModel = {
    value: this.letters
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
	ngOnInit() {}
}
