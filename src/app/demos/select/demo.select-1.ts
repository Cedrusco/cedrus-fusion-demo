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
		optionsSource: 'fromModel',
		options: [
			{value: 'apl', label: 'Apple'},
			{value: 'ban', label: 'Banana'},
			{value: 'wtm', label: 'Watermelon'},
			{value: 'per', label: 'Pear'},
			{value: 'pec', label: 'Peach'},
			{value: 'org', label: 'Orange'},
			{value: 'man', label: 'Mango'},
			{value: 'gra', label: 'Grapes'},
			{value: 'lim', label: 'Lime'},
			{value: 'lem', label: 'Lemon'}
		],
		selected: '',
		showFilter: true
	});
}
