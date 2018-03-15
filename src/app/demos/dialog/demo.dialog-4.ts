import { Component } from '@angular/core';
import { DialogModel, DialogService } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-dialog-4',
	templateUrl: './demo.dialog-4.html',
 	styleUrls: ['./demo.dialog-4.scss']
})

export class CfDemoDialog4 {
	constructor(private dialogService: DialogService) { }

	open() {
		let dialogOptions = {
			properties: new DialogModel()
		};

		this.dialogService.show( dialogOptions );
	}
}