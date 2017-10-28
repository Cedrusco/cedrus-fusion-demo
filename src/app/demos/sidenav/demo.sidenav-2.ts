import { Component, Input, Output, OnInit, OnDestroy, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { SidenavModel, SidenavStylingModel, CfComponentTemplateService } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-sidenav-2',
	templateUrl: './demo.sidenav-2.html',
 	styleUrls: ['./demo.sidenav-2.scss']
})
export class CfDemoSidenav2 {

	constructor(private cfComponentTemplateService: CfComponentTemplateService) { }

	id: string = 'dynamic-sidenav-demo';

	dynamicSidenavModel = new SidenavModel({
		fullHeight: true,
		contentId: 'dynamicSidenavContent',
		leftSideId: 'dynamicLeftSide',
		leftSideMode: 'push',
		leftSideWidth: '30%',
		rightSideId: 'dynamicRightSide',
		rightSideMode: 'side',
		rightSideWidth: '250px',
	});

	dynamicSidenavStyles = new SidenavStylingModel({
		container: { class: 's-container' },
		leftSide: { class: 's-left' },
		content: { class: 's-content' },
		rightSide: { class: 's-right' },
	});

	@ViewChild('dynamicSidenavView', { read: ViewContainerRef }) dynamicSidenavView: ViewContainerRef;
	@ViewChild('dynamicContentOne', { read: TemplateRef }) dynamicContentOne: TemplateRef<any>;
	@ViewChild('dynamicContentTwo', { read: TemplateRef }) dynamicContentTwo: TemplateRef<any>;
  @ViewChild('myDialogTmpl', { read: TemplateRef }) myDialogTmpl: TemplateRef<any>;

  contentName = 'one';

  toggleContent() {
  	if(this.contentName === 'one') {
  		this.contentName = 'two';
  		this.cfComponentTemplateService.showTemplateInContainer(this.dynamicContentTwo, this.dynamicSidenavView);
  	} else {
  		this.contentName = 'one';
  		this.cfComponentTemplateService.showTemplateInContainer(this.dynamicContentOne, this.dynamicSidenavView);
  	}
  }

	showTemplateInDialogWithinComponent() {
		let dialogOptions = {
			target: this.id,
			title: 'Test dialog',
			okButton: true,
			cancelButton: false,
			width: '50%',
			height: '50%',
			disableClose: false,
			dialogType: 'info' //'warning', 'info', 'error'
		};

		this.cfComponentTemplateService.showInDialog({ template: this.myDialogTmpl, dialogOptions: dialogOptions });
	}

	showTemplateInFloatingDialog(event) {
		let dialogOptions = {
			sourceEvent: event,
			position: 'auto', //leftUp, leftBelow, rightBelow, rightUp
			title: 'Test dialog',
			okButton: true,
			cancelButton: true,
			width: '500px',
			height: '300px',
			dialogType: 'info' //'warning', 'info', 'error'
		};

		this.cfComponentTemplateService.showInFloatingDialog({ template: this.myDialogTmpl, dialogOptions: dialogOptions });
	}
}
