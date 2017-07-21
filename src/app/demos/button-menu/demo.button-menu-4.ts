import { Component, Input } from '@angular/core';
import { IconModel } from 'cedrus-fusion';
import { ButtonModel } from 'cedrus-fusion';
import { MenuModel } from 'cedrus-fusion';
import { ButtonMenuModel } from 'cedrus-fusion';



@Component({
  moduleId: module.id,
  selector: 'cf-demo-button-menu-4',
  templateUrl: './demo.button-menu-4.html',
  styleUrls: ['./demo.button-menu-4.scss']
})
export class CfDemoButtonMenu4 {
	

	menu= new MenuModel ({
		menuItems : [
			{
				buttonProperty:{
					label: "Action 1",
					iconProperty: null
				},
				divider: true
			},
			{
				buttonProperty:{
					label: "Action 2",
					iconProperty: null
				},
				divider: true
			},
			{
				buttonProperty:{
					label: "Action 3",
					iconProperty: null
				},
				divider: true
			},
		]
	});

	button= new ButtonModel ({
		label: "Main Action"
	});

	buttonMenuProperties = new ButtonMenuModel({
		buttonProperty: this.button,
		menuProperty: this.menu
	});

}
