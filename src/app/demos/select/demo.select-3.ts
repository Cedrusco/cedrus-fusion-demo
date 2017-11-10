import { Component } from '@angular/core';
import { SelectModel, InputModel, SelectStylingModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-select-3',
	templateUrl: './demo.select-3.html',
	styleUrls: ['./demo.select-3.scss']
})

export class CfDemoSelect3 {

	mySelect = new SelectModel ({
		staticPlaceholder: 'Select multiple options...',		
		dropdownUnder: true,
		showIcon: true
	});

	mySelectStyling = new SelectStylingModel ({
		container: { class: 'my-select-container' },
		staticPlaceholder: { class: 'my-select-placeholder' },
		icon: { class: 'my-select-icon' },
		dropdownPanel: { class: 'my-panel' }
	});

	selectedValues = '';

}
