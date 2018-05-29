import { Component } from '@angular/core';
import { IconModel, ButtonModel, SelectableModel, ButtonStylingModel, IconStylingModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-switch-4',
	templateUrl: './demo.switch-4.html',
	styleUrls: ['./demo.switch-4.scss']
})

export class CfDemoSwitch4 {
	myIconProperty = new IconModel({
		name: "fa-star",
		size: "20px"
	});

	// Button Property
	buttonProperty= new ButtonModel ({
		label: "Change my theme!",
    	iconProperty: this.myIconProperty,
		iconPosition:"left"
	});

	// Button Styling and Icon Styling
	buttonStyling = new ButtonStylingModel({
		button:{
			class:"myButton"
		},
		iconStyling: new IconStylingModel ({
			icon: {
				class:"myButtonIcon"
			}
		})
	});

	buttonStyling2 = new ButtonStylingModel({
		button:{
			class:"myButton2"
		},
		iconStyling: new IconStylingModel ({
			icon: {
				class:"myButtonIcon2"
			}
		})
	});

	switchModel = new SelectableModel({value: 'anything', name: 'flip', item: '', color: 'blueviolet', checked: false });

	currentStyle: ButtonStylingModel = this.buttonStyling;

	onSwitch() {
		this.currentStyle === this.buttonStyling ? this.currentStyle = this.buttonStyling2 : this.currentStyle = this.buttonStyling;
	}
}
