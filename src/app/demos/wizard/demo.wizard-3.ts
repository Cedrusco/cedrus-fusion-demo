import { Component, Input, Output, OnInit, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { ButtonModel, CfButtonComponent } from 'cedrus-fusion';
import { ButtonStylingModel, SelectableModel } from 'cedrus-fusion';
import { WizardModel, CfWizardComponent } from 'cedrus-fusion';
import { WizardStylingModel } from 'cedrus-fusion';
import { WizardStepModel } from 'cedrus-fusion';
import { WizardStepStylingModel, CfComponentTemplateService } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-wizard-3',
	templateUrl: './demo.wizard-3.html',
 	styleUrls: ['./demo.wizard-3.scss']
})

export class CfDemoWizard3 implements OnInit {
	@ViewChild('refusal', { read: TemplateRef }) refusal: TemplateRef<any>;
	@ViewChild('acceptance', { read: TemplateRef }) acceptance: TemplateRef<any>;

	constructor(private cfComponentTemplateService: CfComponentTemplateService) { }

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

	conditions = new SelectableModel({
		value: "agree",
		item: "I agree",
		checked: false
	});

	confidentiality = new SelectableModel({
		value: "agree",
		item: "I agree",
		checked: false
	});

	noncompete = new SelectableModel({
		value: "agree",
		item: "I agree",
		checked: false
	});

	steps = [
		new WizardStepModel({ header: { label: "Terms" }, isValid: true }),
		new WizardStepModel({ header: { label: "Nondisclosure" }, isValid: true }),
		new WizardStepModel({ header: { label: "Noncompete" }, isValid: true }),
	];

	onCompletion(e) {
		if (this.conditions.checked && this.confidentiality.checked && this.noncompete.checked) {
			this.showAcceptance();
		} else {
			e.stopPropagation();
			e.preventDefault();
			this.showRefusal();
		}
	}

	showAcceptance() {
		let dialogOptions = {
			title: 'Success',
			okButton: true,
			width: '50%',
			height: '50%',
			disableClose: true,
			dialogType: 'info'//'warning', 'info', 'error'
		};

		this.cfComponentTemplateService.showInDialog({
			template: this.acceptance,
			dialogOptions: dialogOptions
		});
	}

	showRefusal() {
		let dialogOptions = {
			title: 'Failure',
			okButton: true,
			width: '50%',
			height: '50%',
			disableClose: true,
			dialogType: 'error'//'warning', 'info', 'error'
		};

		this.cfComponentTemplateService.showInDialog({
			template: this.refusal,
			dialogOptions: dialogOptions
		});
	}

	ngOnInit() {
		setTimeout(() => {
			// this.steps[2]['isValid'] = false;
	  }, 5000);
	}
}
