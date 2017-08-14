import { Component } from '@angular/core';
import { ToolbarStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-toolbar-3',
	templateUrl: './demo.toolbar-3.html',
 	styleUrls: ['./demo.toolbar-3.scss']
})
export class CfDemoToolbar3 {
	
	customStyles = new ToolbarStylingModel({
		toolbar: { class: 'my-toolbar-style' },
		actionsStyling: {
			iconStyling: { class: 'mat-primary' },
			menuItemStyling: {
				buttonStyling: {
					button: { class: 'my-toolbar-style' }
				}
			}
		}
	});
}