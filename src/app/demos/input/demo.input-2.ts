import { Component } from '@angular/core';
import { CfInputComponent } from 'cedrus-fusion';
import { NotificationModel } from 'cedrus-fusion';
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
		type : "text",
		placeholder: " amount( USD )",
		prefix : "$",
		iconProperty: new IconModel ({
			name: "fa-usd",
			size: "20px"
		}),
		iconPosition:"left"
	});

	inputStyling = new InputStylingModel({
		input:{
			class:"redInput"
		},
		iconStyling: new IconStylingModel ({
			icon: {
				class: "redInput"
			}
		})
	});
}
