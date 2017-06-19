import { Component } from '@angular/core';
import { SelectModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-select-1',
	templateUrl: './demo.select-1.html',
	styleUrls: ['./demo.select-1.scss']
})

export class CfDemoSelect1 {
	myFruits = new SelectModel ({
		placeholder: 'Selected Your Fruit: ',
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
}
