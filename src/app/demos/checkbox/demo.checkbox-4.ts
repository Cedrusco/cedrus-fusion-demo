import { Component } from '@angular/core';
import { SelectableModel, ButtonStylingModel, IconStylingModel, ButtonModel, IconModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-checkbox-4',
	templateUrl: './demo.checkbox-4.html',
	styleUrls: ['./demo.checkbox-4.scss']
})

export class CfDemoCheckbox4{
	styleOptions = [
		{ value:"dropShadow", item: 'Shadow', checked:false },
		{ value: 'blueBackground', item: 'Background', checked:false },
		{ value: 'textWhite', item: 'Text', checked:false }
	];

	myIconProperty = new IconModel({
		name: "fa-star",
		size: "20px"
	});

	// Button Property
	buttonProperty = new ButtonModel ({
		label: "Change my theme!",
    	iconProperty: this.myIconProperty,
		iconPosition:"left"
	});

	currentStyle = new ButtonStylingModel({
		button:{
			class: ''
		}
	});

	onSelected() {
		setTimeout(() => {
			let selectedClasses = this.styleOptions.filter((option) => {
				return option.checked;
			})
			let metaClass = '';
			selectedClasses.forEach(selectedClass => {
				if (metaClass !== '') {
					metaClass += ` ${selectedClass.value}`
				} else {
					metaClass = selectedClass.value;
				}
			})
			this.currentStyle = new ButtonStylingModel({
				button:{
					class: metaClass
				}
			})
		}, 300);
	}
}
