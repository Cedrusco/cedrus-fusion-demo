import { Component } from '@angular/core';
import { InputModel } from 'cedrus-fusion';
import { InputStylingModel } from 'cedrus-fusion';
import { IconModel } from 'cedrus-fusion';
import { IconStylingModel } from 'cedrus-fusion';
import { ButtonModel } from 'cedrus-fusion';
import { MenuModel } from 'cedrus-fusion';
import { MenuItemModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-input-2',
	templateUrl: './demo.input-2.html',
 	styleUrls: ['./demo.input-2.scss']
})

export class CfDemoInput2 {

	inputProperties= new InputModel ({
		maxlength: 25,
		placeholder: "Type to see style changes",
		iconProperty: new IconModel ({
			name: "fa-edit",
			size: "22px"
		}),
		hint: {
			text: "max 25 symbols"
		}
	});

	inputStyling = new InputStylingModel({
		input: { class: "" },
		hint: { class: "" },
		iconStyling: new IconStylingModel ({
			icon: { class: "" }
		})
	});

	lastValue = '';

	updateColors(value) {
		if(value.length > this.lastValue.length) {
			this.inputStyling.container.class = 'increases';
			this.inputStyling.input.class = 'increases';
			this.inputStyling.hint.class = 'increases';
			this.inputStyling.iconStyling.icon.class = 'increases';
		} else {
			this.inputStyling.container.class = 'decreases';
			this.inputStyling.input.class = 'decreases';
			this.inputStyling.hint.class = 'decreases';
			this.inputStyling.iconStyling.icon.class = 'decreases';
		}
		this.inputProperties.hint.text = 'symbols quantity is ' + value.length + ' (max is 25)';
		this.lastValue = value;
	}
}
