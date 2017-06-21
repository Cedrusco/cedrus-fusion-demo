import { Component } from '@angular/core';
import { AutocompleteModel } from 'cedrus-fusion';
import { AutocompleteStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-autocomplete-2',
	templateUrl: './demo.autocomplete-2.html',
 	styleUrls: ['./demo.autocomplete-2.scss']
})

export class CfDemoAutocomplete2 {

	myAutocompleteWithRemoteData = new AutocompleteModel({
		serverUrl: 'http://raum.zz.mu/api_states.php?name=',
		displayField: 'name',
		useChips: true,
		stayOpenedOnClick: true
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