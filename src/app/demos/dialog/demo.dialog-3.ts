import { Component, ViewChild, TemplateRef } from '@angular/core';
import { CfComponentTemplateService } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-dialog-3',
	templateUrl: './demo.dialog-3.html',
 	styleUrls: ['./demo.dialog-3.scss']
})

export class CfDemoDialog3 {
	@ViewChild('dialogActions', { read: TemplateRef }) dialogActions: TemplateRef<any>;

	actions = [];

	constructor(private cfComponentTemplateService: CfComponentTemplateService) { }

	show(type) {
		let dialogOptions = {
			title: 'Dialog type: ' + type,
			okButton: true,
			cancelButton: true,
			width: '600px',
			height: '300px',
			dialogType: type//'warning', 'info', 'error'
		};

		dialogOptions['okCallback'] = (result) => {
			this.actions.push(result + ' action from ' + type + ' dialog');
		};

		dialogOptions['cancelCallback'] = (result) => {
			this.actions.push(result + ' action from ' + type + ' dialog');
		};

		this.cfComponentTemplateService.showInDialog({
			template: this.dialogActions,
			dialogOptions: dialogOptions
		});
	}

	close() {
		this.cfComponentTemplateService.dialogRef.close();
	}
}
