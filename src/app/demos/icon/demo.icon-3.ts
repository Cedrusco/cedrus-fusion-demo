import { Component, OnInit } from '@angular/core';

import { IconModel } from 'cedrus-fusion';
import { IconStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-icon-3',
	templateUrl: './demo.icon-3.html',
 	styleUrls: ['./demo.icon-3.scss']
})

export class CfDemoIcon3 {

	// Property
	iconProperty = new IconModel({
			name: "account_box",
			size: "50px"
	});

	//Styling
	iconStyling = new IconStylingModel ({
			container: {
				class:"iconContainer"
			},
			icon: {
				class:"iconProfile"
			}
		});
}
