import { Component, EventEmitter } from '@angular/core';
import { MenuModel , IconModel} from 'cedrus-fusion';


@Component ({
	moduleId: module.id,
	selector: 'cf-demo-menu-1',
	templateUrl: './demo.menu-1.html',
 	styleUrls: ['./demo.menu-1.scss']
})

export class CfDemoMenu1{

	myTooltip = {
		message:"Share",
		position:"bottom"
	}
	menuProperties= new MenuModel ({
		triggerIcon: new IconModel ({
			name: "fa-plus",
			size: "30px"
		}),
		menuItems: [
		{
			buttonProperty:{
				label: "Photo and Video Library",
				iconProperty: new IconModel ({
					name: 'fa-camera',
					size: '24px'
				}),
				iconPosition:"left",
			},
			notification: null,
			onClick: null,
			divider:true
		},
		{
			buttonProperty:{
				label: "Document",
				iconProperty: new IconModel ({
					name: 'fa-file-o',
					size: '24px'
				}),
				iconPosition:"left",
			},
			notification: null,
			onClick: null,
			divider:true
		},
		{
			buttonProperty: {
				label: "Location",
				iconProperty: new IconModel ({
					name: 'fa-map-marker',
					size: '24px'
				}),
				iconPosition:"left",
			},
			notification: null,
			onClick: null,
			divider:true
		}
	]});

}
