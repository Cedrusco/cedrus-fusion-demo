import { Component, OnInit, Input, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { CfCoreComponent } from 'cedrus-fusion';
import { CfDialogComponent } from 'cedrus-fusion';

import { CfComponentTemplateService } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-dialog-1',
	templateUrl: './demo.dialog-1.html',
 	styleUrls: ['./demo.dialog-1.scss'],
	entryComponents: [CfDialogComponent]
})

export class CfDemoDialog1 extends CfCoreComponent implements OnInit {
	@ViewChild('componentDialogTemplate', { read: TemplateRef }) componentDialogTemplate: TemplateRef<any>;

	customers = [{
		name: 'John',
		city: 'Anchorage'
	}, {
		name: 'Jack',
		city: 'NYC'
	}, {
		name: 'Jane',
		city: 'Paris'
	}, {
		name: 'John',
		city: 'Anchorage'
	}, {
		name: 'Jack',
		city: 'NYC'
	}, {
		name: 'Jane',
		city: 'Paris'
	}, {
		name: 'John',
		city: 'Anchorage'
	}, {
		name: 'Jack',
		city: 'NYC'
	}, {
		name: 'Jane',
		city: 'Paris'
	}, {
		name: 'John',
		city: 'Anchorage'
	}, {
		name: 'Jack',
		city: 'NYC'
	}, {
		name: 'Jane',
		city: 'Paris'
	}];

	selectedCustomer: any;

	selectedOption: string;

	constructor(public elementRef: ElementRef, private cfComponentTemplateService: CfComponentTemplateService) {
		super(elementRef);
	}

	ngOnInit() {}

	showTemplateInDialog() {
		let dialogOptions = {
			title: 'Customers List',
			okButton: true,
			cancelButton: false,
			width: '50%',
			height: '50%',
			disableClose: false,
			dialogType: 'info'//'warning', 'info', 'error'
		};
		dialogOptions['okCallback'] = (result) => {
			this.selectedOption = result;
		};

		this.cfComponentTemplateService.showInDialog({
			template: this.componentDialogTemplate,
			dialogOptions: dialogOptions
		});
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
			dialogType: 'info'//'warning', 'info', 'error'
		};
		dialogOptions['okCallback'] = (result) => {
			this.selectedOption = result;
		};

		this.cfComponentTemplateService.showInDialog({
			template: this.componentDialogTemplate,
			dialogOptions: dialogOptions
		});
	}

	showTextInDialog() {
		// we want the text to be centered vertically, so, do not pass height
		let dialogOptions = {
			title: 'Customers List',
			okButton: true,
			cancelButton: false,
			width: '50%',
			disableClose: false,
			dialogType: 'info'//'warning', 'info', 'error'
		};
		dialogOptions['okCallback'] = (result) => {
			this.selectedOption = result;
		};

		this.cfComponentTemplateService.showInDialog({
			text: 'Hello World!',
			dialogOptions: dialogOptions
		});
	}

	showTemplateInFloatingDialog(event) {
		let dialogOptions = {
			sourceEvent: event,
			position: 'auto',//leftUp,leftBelow,rightBelow,rightUp
			title: 'Customers List',
			okButton: true,
			cancelButton: true,
			width: '500px',
			height: '300px',
			dialogType: 'warning'//'warning', 'info', 'error'
		};
		dialogOptions['okCallback'] = (result) => {
			this.selectedOption = result;
		};

		this.cfComponentTemplateService.showInFloatingDialog({
			template: this.componentDialogTemplate,
			dialogOptions: dialogOptions
		});
	}
}
