import { Component, ViewChild, TemplateRef } from '@angular/core';
import { CfComponentTemplateService } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-dialog-1',
	templateUrl: './demo.dialog-1.html',
 	styleUrls: ['./demo.dialog-1.scss']
})

export class CfDemoDialog1 {
	@ViewChild('demoDialog', { read: TemplateRef }) demoDialog: TemplateRef<any>;

	constructor(private cfComponentTemplateService: CfComponentTemplateService) { }

	open() {
		let dialogOptions = {
			title: 'Demo dialog',
			okButton: true,
			cancelButton: true,
			width: '400px',
			height: '300px',
			dialogType:'info'
		};

		this.cfComponentTemplateService.showInDialog({
			template: this.demoDialog,
			dialogOptions: dialogOptions
		});
	}
}