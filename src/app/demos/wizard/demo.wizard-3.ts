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

	stepNumber = 0;

	wizardSteps = new WizardModel({
		showCardNumberAsPrefix: false,
		showCardNumberAsIcon: true
	});

	wizardStyles = new WizardStylingModel({
		container: { class: 'my-steps-container' },
		previousButton: { button: { class: 'my-navigation-buttons mat-raised-button' } },
		nextButton: { button: { class: 'my-navigation-buttons mat-raised-button' } },
		finishButton: { button: { class: 'my-navigation-buttons submit-button mat-raised-button' } },
	});

	wizardStepsStyles = new WizardStepStylingModel({
		container: { class: 'my-step-container', dynamicClass: '' },
		header: { button: { class: 'my-step-header mat-primary' } },
		iconIndex: { class: 'my-step-icon-index' },
	});

	// steps = [
	// 	new WizardStepModel({ header: { label: "Small content" }}),
	// 	new WizardStepModel({ header: { label: "Big content" }}),
	// 	new WizardStepModel({ header: { label: "Image component" }}),
	// ];

	raisedButton = new ButtonStylingModel({button: {class: 'mat-primary mat-raised-button'}});

	stepsHeight = new SelectModel({
		placeholder: 'Selected steps height:',
		items: [
			{itemValue: 'auto-height', itemLabel: 'Auto'},
			{itemValue: 'fixed-height', itemLabel: '250px'},
		],
		selected: 'auto-height'
	});
  
  navigate(direction) {
  	switch (direction) {
  		case "next": this.stepNumber < 2 ? ++this.stepNumber : this.stepNumber = 0; break;
  		case "prev": this.stepNumber > 0 ? --this.stepNumber : this.stepNumber = 2; break;
  	}
		this.styledWizard.goToStep(this.styledWizard._steps[this.stepNumber], this.stepNumber);
  }

	setHeight(height) {
		this.wizardStepsStyles.container.dynamicClass = height;
	}

	hiddenSteps = [false, true, true];
	showStep(step) {
		this.stepNumber = this.styledWizard.activeStepIndex;
		switch (this.styledWizard.activeStepIndex) {
			case 1: if (this.hiddenSteps[1]) this.hiddenSteps[1] = false; break;
			case 2: if (this.hiddenSteps[2]) this.hiddenSteps[2] = false; break;
		}
	}
}
