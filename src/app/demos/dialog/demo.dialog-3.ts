import { Component, OnInit, Input, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { CfCoreComponent, WizardModel, WizardStepModel, WizardStylingModel, ButtonModel, ButtonStylingModel, SelectableModel, CfWizardComponent } from 'cedrus-fusion';
import { CfDialogComponent } from 'cedrus-fusion';

import { CfComponentTemplateService } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-dialog-3',
	templateUrl: './demo.dialog-3.html',
 	styleUrls: ['./demo.dialog-3.scss'],
	entryComponents: [CfDialogComponent]
})

export class CfDemoDialog3 extends CfCoreComponent implements OnInit {
	@ViewChild('componentDialogTemplate', { read: TemplateRef }) componentDialogTemplate: TemplateRef<any>;

	selectedCustomer: any;

	selectedOption: string;

	constructor(public elementRef: ElementRef, private cfComponentTemplateService: CfComponentTemplateService) {
		super(elementRef);
	}

	ngOnInit() {}

	showTemplateInDialog() {
		let dialogOptions = {
			title: 'Complete Your Order',
			okButton: true,
			cancelButton: true,
			width: '325px',
			height: '450px',
			disableClose: true,
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

	proteins = [
		new SelectableModel({value: 'Smoked chicken', item: 'Smoked chicken', checked: false }),
		new SelectableModel({value: 'Brisket', item: 'Brisket', checked: false }),
		new SelectableModel({value: 'Pulled pork', item: 'Pulled pork', checked: false }),
		new SelectableModel({value: 'Ribs', item: 'Ribs', checked: false }),
	];

	sides: Object[]= [
		{ value:"cb", item: 'Corn bread', checked:false },
		{ value: 'mp', item: 'Mashed potatoes', checked:false },
		{ value: 'mc', item: 'Macaroni and cheese', checked:false },
		{ value: 'bs', item: 'Brunswick stew', checked:false },
		{ value: 'cg', item: 'Collard greens', checked:false }
	];

	closeDialog() {
		this.cfComponentTemplateService.dialogRef.close();
	}
}
