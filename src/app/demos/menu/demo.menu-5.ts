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

	adminMenuItems=[
			{
				buttonProperty:{
					label: "",
					iconProperty: null,
				},
				divider: false,
				notification: '',
				item: 'Staff List'
			},
			{
				buttonProperty:{
					label: "",
					iconProperty: null
				},
				divider: false,
				notification: '',
				item: 'Inbox'
			},
			{
				buttonProperty:{
					label: "",
					iconProperty: null
				},
				divider: false,
				notification: '',
				item: 'Profile'
			},
	];
	nonadminMenuItems=[
			{
				buttonProperty:{
					label: "",
					iconProperty: null
				},
				divider: false,
				notification: '',
				item: 'Inbox'
			},
			{
				buttonProperty:{
					label: "",
					iconProperty: null
				},
				divider: false,
				notification: '',
				item: 'Profile'
			},
	];

	dynamicMenu= new MenuModel ({
		triggerIcon: new IconModel ({
			name: "view_headline",
			size: "30px"
		}),
		itemsSource: "fromModel",
		menuItems: this.nonadminMenuItems
	});

	checkUser(e){
		this.dynamicMenu.menuItems = e ? this.adminMenuItems : this.nonadminMenuItems;
	}
}
