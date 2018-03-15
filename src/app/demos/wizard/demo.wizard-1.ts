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
		showStepNumberAsPrefix: true,
		showStepNumberAsIcon: false
	});

	steps = [
		new WizardStepModel({ label: "First" }),
		new WizardStepModel({ label: "Second" }),
		new WizardStepModel({ label: "Third" }),
		new WizardStepModel({ label: "Fourth" }),
		new WizardStepModel({ label: "Fifth" })
	];
}