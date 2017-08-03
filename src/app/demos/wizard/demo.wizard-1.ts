import { Component } from '@angular/core';
import { WizardModel, WizardStepModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-wizard-1',
	templateUrl: './demo.wizard-1.html',
 	styleUrls: ['./demo.wizard-1.scss']
})

export class CfDemoWizard1 {

	myWizard = new WizardModel({
		showStepNumberAsIcon: true,
		showStepNumberAsPrefix: false
	});

	myWizard2 = new WizardModel({
		showStepNumberAsPrefix: true,
		showStepNumberAsIcon: false
	});

	steps = [
		new WizardStepModel({ header: { label: "Step" }, isValid: true }),
		new WizardStepModel({ header: { label: "Step" }, isValid: true }),
		new WizardStepModel({ header: { label: "Step" }, isValid: true }),
		new WizardStepModel({ header: { label: "Step" }, isValid: true }),
		new WizardStepModel({ header: { label: "Step" }, isValid: true }),
	];
}