import { Component, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { DialogModel, CfComponentTemplateService, CfCoreComponent, TemplateService } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-dialog-2',
	templateUrl: './demo.dialog-2.html',
 	styleUrls: ['./demo.dialog-2.scss']
 })

export class CfDemoDialog2 extends CfCoreComponent {
	@ViewChild('componentDialogTemplate', { read: TemplateRef }) componentDialogTemplate: TemplateRef<any>;

	constructor( elementRef: ElementRef, templateService: TemplateService, private cfComponentTemplateService: CfComponentTemplateService ) { 
		super(elementRef, templateService); 
	}

	showInSection() {
		let dialogOptions = {
			properties: new DialogModel({
				targetId: this.id,
				width: '500px',
				header: {
					toolbar: {
						type: 'error',
						title: 'Dialog within section with ID'
					}
				},
				footer: {
					show: false,
					okButton: { show: false },
					cancelButton: { show: false },
				}
			})
		};

		this.cfComponentTemplateService.showInDialog( dialogOptions );
	}

	dialogPosition: string = 'auto';  //auto, leftUp, leftBelow, rightBelow, rightUp
	
	dialogPositions = [
		{ value: 'auto', label: 'Auto', checked: true },
		{ value: 'leftUp', label: 'Left-up' },
		{ value: 'leftBelow', label: 'Left-below' },
		{ value: 'rightBelow', label: 'Right-below' },
		{ value: 'rightUp', label: 'Right-up' }
	];

	setPosition(e) {
		this.dialogPosition = this.dialogPositions[[e][0]].value;
	}

	showFloatingDialog(event) {
		let dialogOptions = {
			properties: new DialogModel({
				sourceEvent: event,
				position: this.dialogPosition,
				header: {
					toolbar: {
						title: 'Dialog with changeable position'						
					}
				},
				width: '300px',
				height: 'auto',
			})
		};

		this.cfComponentTemplateService.showInFloatingDialog( dialogOptions );
	}
}
