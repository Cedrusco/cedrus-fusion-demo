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
	@ViewChild('toolbarDemo') toolbarDemo;
	@ViewChild('myControlledToolbar') myControlledToolbar;

	isClosed = false;
	isExpanded = true;
	isMaximized = false;
	halkidiki = 'http://tury.travel/images/Blog/%D1%85%D0%B0%D0%BB%D0%BA%D0%B8%D0%B4%D0%B8%D0%BA%D0%B8.jpg';

	myToolbar = new ToolbarModel({
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