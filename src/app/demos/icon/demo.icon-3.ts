import { Component, OnInit } from '@angular/core';

import { IconModel } from 'cedrus-fusion';
import { IconStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-icon-3',
	templateUrl: './demo.icon-3.html',
 	styleUrls: ['./demo.icon-3.scss']
})

export class CfDemoIcon3 implements OnInit {


	icon1:IconModel;
	iconStyling1: IconStylingModel;

	ngOnInit(): void {
		this.icon1= new IconModel ({
			name: "account_box",
			size: "50px"
		});
		this.iconStyling1 = new IconStylingModel ({
			container: {
				class:"iconContainer"
			},
			icon: {
				class:"iconProfile"
			}
		});
	}

}
