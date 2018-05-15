import { Component, Input, Output, OnInit, OnDestroy, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { SidenavModel, SidenavStylingModel, DialogService, DialogModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-sidenav-2',
	templateUrl: './demo.sidenav-2.html',
 	styleUrls: ['./demo.sidenav-2.scss']
})
export class CfDemoSidenav2 {

	constructor(private dialogService: DialogService) { }

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

  @ViewChild('myDialogTmpl', { read: TemplateRef }) myDialogTmpl: TemplateRef<any>;

  contentName = 'one';

  toggleContent() {
		this.contentName = this.contentName === 'one' ? 'two' : 'one';
  }

	showTemplateInDialogWithinComponent() {
		let dialogOptions = {
			properties: new DialogModel({
				targetId: this.id,
				width: '50%',
				header: { toolbar: { content: { title: 'Test dialog' } } },
				content: { template: this.myDialogTmpl }
			})
		};

		this.dialogService.show( dialogOptions );
	}

	showTemplateInFloatingDialog(event) {
		let dialogOptions = {
			properties: new DialogModel({
				targetId: this.id,
				sourceEvent: event,
				position: 'auto',
				width: '500px',
				header: { toolbar: { content: { title: 'Test dialog' } } },
				content: { template: this.myDialogTmpl }
			})
		};

		this.dialogService.showFloating( dialogOptions );
	}
}
