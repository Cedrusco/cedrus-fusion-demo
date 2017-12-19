import { Component } from '@angular/core';
import { ToolbarModel, MenuModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-toolbar-1',
	templateUrl: './demo.toolbar-1.html',
 	styleUrls: ['./demo.toolbar-1.scss']
})
export class CfDemoToolbar1 {

	simpleToolbar = new ToolbarModel({
		content: { 
			title: 'Demo toolbar' 
		},
		actions: {
			menu: new MenuModel({  
				triggerIcon: { name: "menu" },
				menuItems: [
					{ buttonProperty: { label: 'Action item' } },
					{ buttonProperty: { label: 'Action item' } },
					{ buttonProperty: { label: 'Action item' } }
				],
				itemsSource: "fromModel"
			})
		}
	});
}