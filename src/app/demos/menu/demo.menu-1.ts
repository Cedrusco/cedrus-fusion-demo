import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CfMenuComponent } from 'cedrus-fusion';
import { ButtonModel } from 'cedrus-fusion';
import { NotificationModel } from 'cedrus-fusion';
import { MenuItemModel } from 'cedrus-fusion';
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

export class CfDemoMenu1 implements OnInit {

	title: string = "CF Demo Menu 1";

	isShown: Boolean = false;
	isDisabled: Boolean = true;

	clickFunc(menuItem): void {
		menuItem.display = !menuItem.display;
	}

	letters = 0;
  myNotifications: NotificationModel = {
    value: this.letters,
    classes: 'mat-accent',
  };
  sender = new ButtonModel({
    label: "Send mail",
    color: {
        foreground: "",
        background: "primary"
    },
    icon: null,
    icon_position:"right"
  });
  sendMessage() { ++this.myNotifications.value; }

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
				notification: this.myNotifications,
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
	menuStyling1 = new MenuStylingModel ({
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

	title2: string = "CF Default Menu Template";

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
			onClick: null
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
			onClick: null
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

	items = [];

	log(e) {
		console.log('e', e);
		this.items.push(e);
	}

	menuStyling2 = new MenuStylingModel ({
		container:{

		},
		iconStyling: new IconStylingModel({
			container: {

			},
			icon:{
				class:"trigger1"
			}
		}),
		menuItem: new MenuItemStylingModel({
			buttonStyling: new ButtonStylingModel({
				iconStyling: new IconStylingModel({
					icon:{
						class:"iconMenu2"
					}
				})
			}),
		})
	});
	ngOnInit(): void {

	}
}
