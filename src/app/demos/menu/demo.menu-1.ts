import { Component, EventEmitter } from '@angular/core';
import { IconModel } from 'cedrus-fusion';
import { MenuModel } from 'cedrus-fusion';
import { MenuItemStylingModel } from 'cedrus-fusion';
import { MenuStylingModel } from 'cedrus-fusion';
import { ButtonStylingModel } from 'cedrus-fusion';
import { IconStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-menu-1',
	templateUrl: './demo.menu-1.html',
 	styleUrls: ['./demo.menu-1.scss']
})

export class CfDemoMenu1{
	
	clickFunc(menuItem): void {
		menuItem.display = !menuItem.display;
	}

	menu= new MenuModel ({
		menuItems : [
			{
				buttonProperty:{
					label: "Hide me on click",
					iconProperty: new IconModel ({
							name: 'fa-apple',
							size: '24px'
						}),
					iconPosition:"right"
				},
				divider: true,
				onClick: this.clickFunc.bind(this)
			},
			{
				buttonProperty:{
					label: "Disabled",
					iconProperty: new IconModel ({
							name: 'fa-apple',
							size: '24px'
						}),
					iconPosition:"right",
					disabled: true
				},
				onClick: this.clickFunc.bind(this)
			},
		]
	});
	menuStyling = new MenuStylingModel ({
		container:{

		},
		menuItemStyling: new MenuItemStylingModel({
			buttonStyling: new ButtonStylingModel({
				iconStyling:new IconStylingModel({
					class:"iconMenu1"
				})
			})

		})
	});
}
