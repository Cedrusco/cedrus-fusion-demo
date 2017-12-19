import { Component, ViewChild } from '@angular/core';
import { ToolbarModel, ButtonStylingModel, CfAnimationService } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-toolbar-2',
	templateUrl: './demo.toolbar-2.html',
 	styleUrls: ['./demo.toolbar-2.scss'],
  animations: [
    CfAnimationService.bounceIn(),
    CfAnimationService.bounceOut(),
    CfAnimationService.rotateIn(),
    CfAnimationService.rotateOut(),
    CfAnimationService.rotateInDownLeft(),
    CfAnimationService.rotateOutDownLeft()
  ]
})
export class CfDemoToolbar2 {
	// @ViewChild('myControlledToolbar') myControlledToolbar;

	isClosed = false;
	isExpanded = true;
	isMaximized = false;
	halkidiki = 'https://d1x3cbuht6sy0f.cloudfront.net/sales/1514/a44680dd_a65d_4be8_bc45_33950b6178ad.jpg';

	toolbarWithContent = new ToolbarModel({
		info: { icon: { name: 'nature' } },
		expandable: { expanded: this.isExpanded },
		maximization: { maximized: this.isMaximized }
	});

	styledButton = new ButtonStylingModel({
		button: { class: 'mat-raised-button mat-warn' }
	});

	toggle(e) {
		this.isExpanded = e ? true : false;
	}

	maximize(e) {
		this.isMaximized = e ? true : false;
	}

	onClose() {
		this.isClosed = true;		
	}

	recreateToolbar() {
		this.isClosed = false;
	}
}