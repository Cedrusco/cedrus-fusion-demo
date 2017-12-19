import { Component } from '@angular/core';
import { DialogModel, CfComponentTemplateService } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-dialog-4',
	templateUrl: './demo.dialog-4.html',
 	styleUrls: ['./demo.dialog-4.scss']
})

export class CfDemoDialog4 {
	constructor(private cfComponentTemplateService: CfComponentTemplateService) { }

	open() {
		let dialogOptions = {
			properties: new DialogModel({
				width: '50%',
				height: 'auto'
			})
		};

		this.cfComponentTemplateService.showInDialog( dialogOptions );
	}
}