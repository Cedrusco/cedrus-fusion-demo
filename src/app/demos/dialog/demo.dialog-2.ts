import { Component, OnInit, Input, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { CfCoreComponent, WizardModel, WizardStepModel, WizardStylingModel, ButtonModel, ButtonStylingModel, SelectableModel, CfWizardComponent } from 'cedrus-fusion';
import { CfDialogComponent } from 'cedrus-fusion';

import { CfComponentTemplateService } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-dialog-2',
	templateUrl: './demo.dialog-2.html',
 	styleUrls: ['./demo.dialog-2.scss'],
	entryComponents: [CfDialogComponent]
})

export class CfDemoDialog2 extends CfCoreComponent implements OnInit {
	@ViewChild('componentDialogTemplate', { read: TemplateRef }) componentDialogTemplate: TemplateRef<any>;
	@ViewChild(CfDialogComponent) myDialog: CfDialogComponent;

	selectedCustomer: any;

	selectedOption: string;

	constructor(public elementRef: ElementRef, private cfComponentTemplateService: CfComponentTemplateService) {
		super(elementRef);
	}

	ngOnInit() {}

	showTemplateInDialog() {
		let dialogOptions = {
			title: 'Site Survey',
			width: '50%',
			height: '65%',
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

	myWizard2 = new WizardModel({
		showStepNumberAsPrefix: true,
	});

	myWizardStyles = new WizardStylingModel({
		container: {
			class: "my-custom-wizard"
		},
		nextButton: new ButtonStylingModel({
			button: {
				class: "my-wizard-next-button ",
			}
		})
	});

	checkbox = new SelectableModel({
		value: "dependents",
		item: "I have dependents",
		checked: false
	});

	closeDialog() {
		this.cfComponentTemplateService.dialogRef.close();
	}

	steps = [
		new WizardStepModel({ header: { label: "Step" }, isValid: true }),
		new WizardStepModel({ header: { label: "Step" }, isValid: true }),
		new WizardStepModel({ header: { label: "Step" }, isValid: true }),
		new WizardStepModel({ header: { label: "Step" }, isValid: true }),
	];
}
