import { Component, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { CfComponentTemplateService, CfCoreComponent, TemplateService } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-dialog-2',
	templateUrl: './demo.dialog-2.html',
 	styleUrls: ['./demo.dialog-2.scss']
 })

export class CfDemoDialog2 extends CfCoreComponent {
	@ViewChild('componentDialogTemplate', { read: TemplateRef }) componentDialogTemplate: TemplateRef<any>;

	constructor(
		elementRef: ElementRef, 
		templateService: TemplateService, 
		private cfComponentTemplateService: CfComponentTemplateService
	) { 
		super(elementRef, templateService); 
	}

	showTemplateInDialogWithinComponent() {
		let dialogOptions = {
			target: this.id,
			title: 'Customers List',
			okButton: true,
			cancelButton: false,
			width: '50%',
			height: '50%',
			disableClose: false,
			dialogType: 'info' //'warning', 'info', 'error'
		};

		this.cfComponentTemplateService.showInDialog({
			template: this.componentDialogTemplate,
			dialogOptions: dialogOptions
		});
	}

	showTemplateInFloatingDialog(event) {
		let dialogOptions = {
			sourceEvent: event,
			position: 'auto', //leftUp, leftBelow, rightBelow, rightUp
			title: 'Customers List',
			okButton: true,
			cancelButton: true,
			width: '500px',
			height: '300px',
			dialogType: 'info' //'warning', 'info', 'error'
		};

		this.cfComponentTemplateService.showInFloatingDialog({
			template: this.componentDialogTemplate,
			dialogOptions: dialogOptions
		});
	}
}
