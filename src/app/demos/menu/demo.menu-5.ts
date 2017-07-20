import { Component, EventEmitter } from '@angular/core';
import { IconModel } from 'cedrus-fusion';
import { MenuModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-menu-5',
	templateUrl: './demo.menu-5.html',
 	styleUrls: ['./demo.menu-5.scss']
})

export class CfDemoMenu5 {
	
	admin = false;

	dynamicMenu= new MenuModel ({
		triggerIcon: new IconModel ({
			name: "view_headline",
			size: "30px"
		}),
		menuItems: [
			{
				buttonProperty:{
					label: "Staff List",
					iconProperty: null,
					display: this.admin
				}
			},
			{
				buttonProperty:{
					label: "Inbox",
					iconProperty: null
				}
			},
			{
				buttonProperty:{
					label: "Profile",
					iconProperty: null
				}
			},
		]
	});
}
