import { Component } from '@angular/core';
import { ButtonModel } from 'cedrus-fusion';
import { IconModel } from 'cedrus-fusion';
import { MenuModel } from 'cedrus-fusion';
import { MenuItemStylingModel } from 'cedrus-fusion';
import { MenuStylingModel } from 'cedrus-fusion';
import { ButtonStylingModel } from 'cedrus-fusion';
import { IconStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-menu-2',
	templateUrl: './demo.menu-2.html',
 	styleUrls: ['./demo.menu-2.scss']
})

export class CfDemoMenu2 {

	menuAccounts= new MenuModel ({
		triggerIcon: new IconModel ({
			name: "account_balance",
			size: "30px"
		}),
		menuItems: [
		{
			buttonProperty:{
				label: "USD account",
				iconProperty: new IconModel ({
					name: 'fa-usd',
					size: '24px'
				}),
				iconPosition:"left",
			},
			notification: null,
			onClick: null,
			divider:false
		},
		{
			buttonProperty:{
				label: "EURO account",
				iconProperty: new IconModel ({
					name: 'fa-eur',
					size: '24px'
				}),
				iconPosition:"left",
			},
			notification: null,
			onClick: null,
			divider:false
		},
		{
			buttonProperty: {
				label: "GBP account",
				iconProperty: new IconModel ({
					name: 'fa-gbp',
					size: '24px'
				}),
				iconPosition:"left",
			},
			notification: null,
			onClick: null
		}
	]});

	menuStyling = new MenuStylingModel ({
		iconStyling: new IconStylingModel({
			icon:{
				class:"trigger"
			}
		}),
		menuItemStyling: new MenuItemStylingModel({
			buttonStyling: new ButtonStylingModel({
				iconStyling: new IconStylingModel({
					icon:{
						class:"iconMenu"
					}
				})
			}),
		})
	});
}
