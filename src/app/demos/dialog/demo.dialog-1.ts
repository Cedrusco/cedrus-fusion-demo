import { Component, ViewChild, TemplateRef } from '@angular/core';
import { DialogModel, CfComponentTemplateService } from 'cedrus-fusion';

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
			properties: new DialogModel({
				header: {
					toolbar: {
						content: {
							title: 'I\'m dialog title'
						}
					}
				},
				content: {
					message: 'I\'m dialog message',
					template: this.demoDialog
				}
			})
		};

		this.cfComponentTemplateService.showInDialog( dialogOptions );
	}
}