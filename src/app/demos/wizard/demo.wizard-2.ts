import { Component, OnInit, ViewChild, AfterContentChecked, ViewChildren, QueryList } from '@angular/core';
import { ButtonModel, CfButtonComponent, CfRadioComponent, SelectableModel, CfGroupComponent } from 'cedrus-fusion';
import { ButtonStylingModel, SelectModel } from 'cedrus-fusion';
import { WizardModel, CfWizardComponent } from 'cedrus-fusion';
import { WizardStylingModel } from 'cedrus-fusion';
import { WizardStepModel } from 'cedrus-fusion';
import { WizardStepStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-wizard-2',
	templateUrl: './demo.wizard-2.html',
 	styleUrls: ['./demo.wizard-2.scss']
})

export class CfDemoWizard2 implements OnInit, AfterContentChecked {

	@ViewChild(CfWizardComponent) myWizard: CfWizardComponent;
	@ViewChildren(CfRadioComponent) buttons: QueryList<CfRadioComponent>;

	get checkedRadioButton() {
		if (this.buttons) {
			let checked = this.buttons.toArray().filter(button => {
				return button.checked;
			})
			if (checked.length) return checked[0].value;
		}
		else return null;
	}

	myWizard2 = new WizardModel({
		showStepNumberAsPrefix: false,
		showStepNumberAsIcon: false
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

	nationality = new SelectModel ({
		placeholder: 'Select your nationality: ',
		items: [
			{itemValue: 'USA', itemLabel: 'United States'},
			{itemValue: 'UK', itemLabel: 'United Kingdom'},
		],
		selected: '',
		showFilter: false
	});

	checkbox = new SelectableModel({
		value: "dependents",
		item: "I have dependents",
		checked: false
	});

	things = [
		new SelectableModel({value: 'Single', item: 'Single', checked: false }),
		new SelectableModel({value: 'Married', item: 'Married', checked: false }),
		new SelectableModel({value: 'Divorced', item: 'Divorced', checked: false }),
	];

	steps = [
		new WizardStepModel({ header: { label: "Step" }, isValid: true }),
		new WizardStepModel({ header: { label: "Step" }, isValid: true }),
		new WizardStepModel({ header: { label: "Step" }, isValid: true }),
		new WizardStepModel({ header: { label: "Step" }, isValid: true }),
	];

	ngAfterContentChecked() {
		if (this.myWizard.wizardSteps) {
			// this.myWizard.wizardSteps.toArray()[1].isDisabled = true;
			// console.log(this.myWizard.wizardSteps.toArray());
		}
	}

	ngOnInit() {
	}
}
