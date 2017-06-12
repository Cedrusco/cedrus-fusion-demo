import { Component } from '@angular/core';
import { CfInputComponent } from 'cedrus-fusion';
import { NotificationModel } from 'cedrus-fusion';
import { InputModel } from 'cedrus-fusion';
import { InputStylingModel } from 'cedrus-fusion';
import { IconModel } from 'cedrus-fusion';
import { IconStylingModel } from 'cedrus-fusion';
import { ButtonModel } from 'cedrus-fusion';
import { MenuModel } from 'cedrus-fusion';
import { MenuItemModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector : 'cf-demo-input-1',
	templateUrl: './demo.input-1.html',
 	styleUrls: ['./demo.input-1.scss']
})

export class CfDemoInput1 {

	input2= new InputModel ({
		type : "text",
		placeholder: " amount( USD )",
		prefix : "$",
		iconProperty: new IconModel ({
			name: "fa-usd",
			size: "20px"
		}),
		iconPosition:"left"
	});

	inputStyling2 = new InputStylingModel({
		input:{
			class:"redInput"
		},
		iconStyling: new IconStylingModel ({
			icon: {
				class: "redInput"
			}
		})
	});

	input3= new InputModel ( {
		type : "text",
		placeholder: "Accent",
		dividerColor : "accent",
		menu: new MenuModel({
			menuItems:[
			{
				buttonProperty: new ButtonModel({
					label: 'Menu item 1',
					icon: new IconModel ({
						name: 'fa-apple',
						size: '24px'
					})
				}),
				divider: true,
				notification: '7',
				display: true,
				disable: false,
				onClick: this.clickFunc.bind(this)
			},
			{
				buttonProperty: new ButtonModel({
					label: 'Menu item 2',
					icon: new IconModel ({
						name: 'thumb_up',
						size: '24px'
					})
				}),
				notification: '',
				onClick: this.clickFunc.bind(this)
			}
		]})
	});

	input4= new InputModel ({
		type : "text",
		placeholder: "Warning",
		dividerColor : "warn",
		iconProperty: new IconModel ({
			name: "fa-exclamation-triangle",
			size: "20px"
		}),
		iconPosition:"right"
	});
	inputStyling4 = new InputStylingModel({
		iconStyling: new IconStylingModel ({
			icon: {
				class: "orangeIcon"
			}
		})
	});

	input5= new InputModel ({
		type : "password",
		placeholder: "password",
		maxlength : "10",
		hint : {
			text : "from 1 to 10 chars",
			align : "start"
		}
	});

	clickFunc(menuItem: MenuItemModel): void {
		this.input3.value = menuItem.buttonProperty.label;
	}

	letters = 0;
  myNotifications: NotificationModel = {
    value: this.letters
  };
  sender = new ButtonModel({
    label: "Send mail",
    icon: null,
    icon_position:"right"
  });
  sendMessage() { ++this.myNotifications.value; }

	warning (): void {
		alert ("Warning!!!");
	}

}
