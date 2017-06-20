import { Component } from '@angular/core';
import { AutocompleteModel } from 'cedrus-fusion';
import { AutocompleteStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-autocomplete-1',
	templateUrl: './demo.autocomplete-1.html',
 	styleUrls: ['./demo.autocomplete-1.scss']
})

export class CfDemoAutocomplete1 {
	myArray = [
		{ color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' }
	];

	myStandardAutocomplete = new AutocompleteModel({
		source: this.myArray,
		displayField: 'color',
		multiselection: true,
		highlighting: true
	});
	
	demoValues = [];
	demoSelections = [];

	logValue(e, i) {
		console.log('e | i', e, i);
		this.demoValues = []; 
		this.demoValues.push(e); 
	}

	logSelected(e, i) {
		console.log('e | i', e, i);
		this.demoSelections = []; 
		this.demoSelections.push(e); 
	}
}