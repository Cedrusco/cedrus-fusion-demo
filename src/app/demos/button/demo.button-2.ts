import { Component } from '@angular/core';
import { IconModel } from 'cedrus-fusion';
import { IconStylingModel } from 'cedrus-fusion';
import { ButtonModel } from 'cedrus-fusion';
import { ButtonStylingModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-button-2',
	templateUrl: './demo.button-2.html',
	styleUrls: ['./demo.button-2.scss']
})
export class CfDemoButton2 {

	// Icon Property for icon inside Button
	myIconProperty = new IconModel({
		name: "fa-shopping-cart",
		size: "20px"
	});

	// Button Property
	buttonProperty= new ButtonModel ({
		label: "View Cart",
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
}
