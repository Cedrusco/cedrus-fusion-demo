import { Component,Input } from '@angular/core';
import { IconModel, ButtonModel, MenuModel, ButtonMenuModel, Themes, NotificationModel } from 'cedrus-fusion';
import { IconStylingModel, ButtonStylingModel, MenuStylingModel, ButtonMenuStylingModel } from 'cedrus-fusion';

@Component({
  moduleId: module.id,
  selector: 'cf-demo-button-menu-2',
  templateUrl: './demo.button-menu-2.html',
  styleUrls: ['./demo.button-menu-2.scss']
})
export class CfDemoButtonMenu2 {

	menu = new MenuModel({
		menuItems: [
			{
				buttonProperty: {
					label: "Hide me on click",
					iconProperty: new IconModel({ name: 'fa-eye-slash', size: '24px' })
				}
			},
			{
				buttonProperty: {
					label: "Disabled",
					iconProperty: new IconModel({ name: 'fa-ban', size: '24px' }),
					disable: true,
					divider: false
				},
				notification: '8'
			}
		]
	});
	
	icon = new IconModel({ name: "fa-smile-o", size: "20px" });

	button = new ButtonModel({ label: "Try Me", iconProperty: this.icon });

	buttonMenuProperties = new ButtonMenuModel({
		buttonProperty: this.button,
		menuProperty: this.menu
	});
	
	buttonMenuStyling = new ButtonMenuStylingModel({
		buttonStyling: new ButtonStylingModel({
			button:{
				themeColor: "accent"
			}
		}),
		menuStyling: new ButtonMenuStylingModel({
			buttonStyling: new ButtonStylingModel({
				iconStyling: new IconStylingModel({
					icon:{
						themeColor: "accent"
					}
				})
			}),
		})
	});

	menuOptions = new MenuModel({
		triggerIcon: new IconModel({ name: "fa-filter" }),
		menuItems: [
			{
				buttonProperty: {
					label: "With icon",
					iconProperty: new IconModel({ name: 'fa-eye', size: '24px' })
				},
				divider: false
			},
			{
				buttonProperty: {
					label: "With Divider"
				}
			},
			{
				buttonProperty: {
					label: "Without icon and divider"
				},
				divider: false
			}
		]
	});

	options = new ButtonMenuModel({
		menuProperty: this.menuOptions
	});
}
