import { Component, OnInit, Input } from '@angular/core';
import { IconModel } from 'cedrus-fusion';
import { ButtonModel } from 'cedrus-fusion';
import { ButtonStylingModel } from 'cedrus-fusion';
import { MenuModel } from 'cedrus-fusion';
import { ButtonMenuModel } from 'cedrus-fusion';
import { ButtonMenuStylingModel } from 'cedrus-fusion';
import { Themes } from 'cedrus-fusion';
import { NotificationModel } from 'cedrus-fusion';

@Component({
  moduleId: module.id,
  selector: 'cf-demo-button-menu-1',
  templateUrl: './demo.button-menu-1.html',
  styleUrls: ['./demo.button-menu-1.scss']
})
export class CfDemoButtonMenu1 implements OnInit {

	title = "DemoButtonMenu";
	@Input()
	themeName = "";
	themes: string[];
	isShown: Boolean = false;
	isDisabled: Boolean = true;

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
				notification: '8',
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
				notification: '8',
				onClick: this.clickFunc.bind(this)
			},

		]
	});

	icon1= new IconModel ({
		name: "pets",
		size: "20px"
	});
	button1= new ButtonModel ({
		label: "Primary",
    	iconProperty: this.icon1,
		iconPosition:"left"
	});

	icon2= new IconModel ({
		name: "fa-bell",
		size: "20px"
	});
	button2= new ButtonModel ({
		label: "Accent",
    	iconProperty: this.icon2,
		iconPosition:"left"
	});

	buttonMenu1 = new ButtonMenuModel({
		buttonProperty: this.button1,
		menuProperty: this.menu
	});
	buttonMenuStyling1 = new ButtonMenuStylingModel({
		buttonStyling: new ButtonStylingModel({
			button:{
				themeColor:"primary"
			}
		})
	})

	buttonMenu2 = new ButtonMenuModel({
		buttonProperty: this.button2,
		menuProperty: this.menu
	});
	buttonMenuStyling2 = new ButtonMenuStylingModel({
		buttonStyling: new ButtonStylingModel({
			button:{
				themeColor:"accent"
			}
		})
	})

	constructor() { }

	ngOnInit() {
		this.themes = ["","cf-red-theme","cf-blue-theme","cf-green-theme"];
	}

	function1(): void {
		alert('This is Button 1 speaking...');
	}
	function2(): void {
		alert('This is Button 2 speaking...');
	}

    letters = 0;
    myNotifications: NotificationModel = {
      value: this.letters,
      classes: 'mat-primary',
      position: 'top-left'
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
}
