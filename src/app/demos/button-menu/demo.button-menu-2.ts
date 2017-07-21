import { Component,Input } from '@angular/core';
import { IconModel } from 'cedrus-fusion';
import { ButtonModel } from 'cedrus-fusion';
import { ButtonStylingModel } from 'cedrus-fusion';
import { MenuModel } from 'cedrus-fusion';
import { ButtonMenuModel } from 'cedrus-fusion';
import { ButtonMenuStylingModel } from 'cedrus-fusion';
import { IconStylingModel } from 'cedrus-fusion';
import { MenuStylingModel } from 'cedrus-fusion';
import { Themes } from 'cedrus-fusion';
import { NotificationModel } from 'cedrus-fusion';

@Component({
  moduleId: module.id,
  selector: 'cf-demo-button-menu-2',
  templateUrl: './demo.button-menu-2.html',
  styleUrls: ['./demo.button-menu-2.scss']
})
export class CfDemoButtonMenu2 {

	clickFunc(menuItem): void {
		menuItem.display = !menuItem.display;
	}

	menu= new MenuModel ({
		menuItems : [
			{
				buttonProperty:{
					label: "Hide me on click",
					iconProperty: new IconModel ({
							name: 'fa-eye-slash',
							size: '24px'
						}),
					iconPosition:"left"
				},
				divider: true,
				onClick: this.clickFunc.bind(this)
			},
			{
				buttonProperty:{
					label: "Disabled",
					iconProperty: new IconModel ({
							name: 'fa-ban',
							size: '24px'
						}),
					iconPosition:"left",
					disabled: true
				},
				notification: '8',
				onClick: this.clickFunc.bind(this)
			},

		]
	});
	
	icon= new IconModel ({
		name: "fa-smile-o",
		size: "20px"
	});
	button= new ButtonModel ({
		label: "Try Me",
    	iconProperty: this.icon,
		iconPosition:"left"
	});

	buttonMenuProperties = new ButtonMenuModel({
		buttonProperty: this.button,
		menuProperty: this.menu
	});
	buttonMenuStyling = new ButtonMenuStylingModel({
		buttonStyling: new ButtonStylingModel({
			button:{
				themeColor:"accent"
			}
		}),
		menuStyling: new ButtonMenuStylingModel({
			buttonStyling: new ButtonStylingModel({
				iconStyling: new IconStylingModel({
					icon:{
						themeColor:"accent"
					}
				})
			}),
		})
	});

		clicked() {
		alert("clicked");
	}

	menuOptions= new MenuModel ({
		triggerIcon: new IconModel ({
			name: "fa-filter",
			size: "30px"
		}),
		menuItems: [
		{
			buttonProperty:{
				label: "With Icon",
				iconProperty: new IconModel ({
					name: 'fa-eye',
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
				label: "Without Icon",
				iconProperty: null
			},
			notification: null,
			onClick: null,
			divider:false
		},
		{
			buttonProperty:{
				label: "With Divider",
				iconProperty: null
			},
			notification: null,
			onClick: null,
			divider:true
		},
		{
			buttonProperty: {
				label: "With Action",
				iconProperty: null
			},
			notification: null,
			onClick: this.clicked.bind(this)
		}
	]});

	options = new ButtonMenuModel({
		menuProperty: this.menuOptions
	});

}
