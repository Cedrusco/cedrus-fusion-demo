import { Component, ViewChild, TemplateRef } from '@angular/core';
import { DialogModel, DialogService } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-dialog-3',
	templateUrl: './demo.dialog-3.html',
 	styleUrls: ['./demo.dialog-3.scss']
})

export class CfDemoDialog3 {
	@ViewChild('dialogActions', { read: TemplateRef }) dialogActions: TemplateRef<any>;

	actions = [];

	constructor(private dialogService: DialogService) {	}

	show(type) {
		let dialogOptions = {
			properties: new DialogModel({
				width: '700px',
				header: {
					toolbar: {
						type: type,
						title: 'Dialog type: ' + type
					}
				},
				content: {
					template: this.dialogActions
				}
			}),
			styling: {
				container: { class: 'styled-dialog' },
			}
		};

		dialogOptions['okCallback'] = (result) => {
			this.actions.push('<b>' + result + '</b>' + ' action from ' + '<b>' + type + '</b>' + ' dialog');
		};

		dialogOptions['cancelCallback'] = (result) => {
			this.actions.push('<b>' + result + '</b>' + ' action from ' + '<b>' + type + '</b>' + ' dialog');
		};

		dialogOptions['infoCallback'] = (result) => {
			this.actions.push('<b>' + result + '</b>' + ' action from ' + '<b>' + type + '</b>' + ' dialog');
		};

		dialogOptions['helpCallback'] = (result) => {
			this.actions.push('<b>' + result + '</b>' + ' action from ' + '<b>' + type + '</b>' + ' dialog');
		};

		dialogOptions['closeCallback'] = (result) => {
			this.actions.push('<b>' + result + '</b>' + ' action from ' + '<b>' + type + '</b>' + ' dialog');
		};

		this.dialogService.show( dialogOptions );
	}

	close() {
		this.dialogService.dialogRef.close();
	}
}
