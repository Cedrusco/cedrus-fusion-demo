import { Component, Input, Output, OnInit, OnDestroy, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { SidenavModel, SidenavStylingModel, CfComponentTemplateService, DialogModel } from 'cedrus-fusion';

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
			properties: new DialogModel({
				target: this.id,
				width: '50%',
				header: { toolbar: { content: { title: 'Test dialog' } } },
				content: { template: this.myDialogTmpl }
			})
		};

		this.cfComponentTemplateService.showInDialog( dialogOptions );
	}

	showTemplateInFloatingDialog(event) {
		let dialogOptions = {
			properties: new DialogModel({
				target: this.id,
				sourceEvent: event,
				position: 'auto',
				width: '500px',
				header: { toolbar: { content: { title: 'Test dialog' } } },
				content: { template: this.myDialogTmpl }
			})
		};

		this.cfComponentTemplateService.showInFloatingDialog( dialogOptions );
	}
}
