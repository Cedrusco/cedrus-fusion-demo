import { Component, OnInit } from '@angular/core';

import { IconModel } from 'cedrus-fusion';
import { IconStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-icon-2',
	templateUrl: './demo.icon-2.html',
 	styleUrls: ['./demo.icon-2.scss']
})

export class CfDemoIcon2 implements OnInit {

	state = "Like";
	toogleIcon: IconModel;
	iconStyling: IconStylingModel;

	ngOnInit(): void {

		this.toogleIcon = new IconModel ({
			name: 'fa-thumbs-up',
			size: '50px',
			value: 'Like',
			toggle: {
				value: 'Dislike',
				name: 'fa-thumbs-down',
				size: '50px'
			}
		});
		this.iconStyling = new IconStylingModel({
			icon: {
				class: "like"
			},
			toggleIcon: {
				icon: {
					class:"dislike"
				}
			}
		});
	}

	// Catching the State of the Icon	
	log(ev): void {
		this.state = ev;
	}

}
