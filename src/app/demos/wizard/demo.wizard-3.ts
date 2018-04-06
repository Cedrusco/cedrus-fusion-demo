import { Component, ViewChild } from '@angular/core';
import { SelectModel, ButtonStylingModel, WizardModel, WizardStepModel, WizardStylingModel, WizardStepStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-wizard-3',
	templateUrl: './demo.wizard-3.html',
 	styleUrls: ['./demo.wizard-3.scss']
})

export class CfDemoWizard3 {
	@ViewChild('styledWizard') styledWizard;

	heightType = 'auto';

	wizardSteps = new WizardModel({
		showCardNumberAsPrefix: false,
		showCardNumberAsIcon: true
	});

	wizardStyles = new WizardStylingModel({
		container: { class: 'my-steps-container' },
		headerSection: { class: 'my-step-header' },
		navigationSection: { class: 'my-step-footer' }
	});

	steps = [
		new WizardStepModel({ label: "Small content" }),
		new WizardStepModel({ label: "Big content" }),
		new WizardStepModel({ label: "Image component" })
	];

	raisedButton = new ButtonStylingModel({button: {class: 'mat-primary mat-raised-button'}});

  navigate(direction) {
  	switch (direction) {
  		case "next": this.wizardSteps.activeStepIndex < 2 ? ++this.wizardSteps.activeStepIndex : this.wizardSteps.activeStepIndex = 0; break;
  		case "prev": this.wizardSteps.activeStepIndex > 0 ? --this.wizardSteps.activeStepIndex : this.wizardSteps.activeStepIndex = 2; break;
  	}
  }

	setHeight(height) { this.heightType = height; }
}
