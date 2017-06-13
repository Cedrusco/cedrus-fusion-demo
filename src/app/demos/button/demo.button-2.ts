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

	icon1= new IconModel ({
		name: "fa-bell",
		type: "fa",
		size: "20px"
	});
	button1= new ButtonModel ({
		label: "BTN1",
    	iconProperty: this.icon1,
		iconPosition:"right"
	});
	buttonStyle1 = new ButtonStylingModel({
		button:{
			class:"button1"
		}
	});
	
	icon2 = new IconModel ({
		name: "pets",
		type: "mi",
		size: "20px"
	});

	button2= new ButtonModel ({
		label: "BTN3",
    	iconProperty: this.icon2,
		iconPosition:"left",
	});
	buttonStyle2 = new ButtonStylingModel({
		iconStyling: new IconStylingModel ({
			icon: {
				class:"icon2"
			}
		}),
		button:{
			class:"button2",
			themeColor: "accent"
		}
	});
}
