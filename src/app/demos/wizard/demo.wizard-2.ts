import { Component, AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { InputModel, WizardModel, WizardStepModel, SelectableModel, CfComponentTemplateService } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-wizard-2',
	templateUrl: './demo.wizard-2.html',
 	styleUrls: ['./demo.wizard-2.scss']
})

export class CfDemoWizard2 implements AfterViewInit {

	@ViewChild('occupantsInfo') wizardRef;
	@ViewChild('personPhoneEl') personPhoneEl;
	@ViewChild('spouseNameEl') spouseNameEl;
	@ViewChild('spouseAgeEl') spouseAgeEl;
	@ViewChild('spouseEmailEl') spouseEmailEl;
	@ViewChild('spousePhoneEl') spousePhoneEl;
	@ViewChild('confirmDialog') confirmDialog;

	demoWizard = new WizardModel({ 
		showStepNumberAsPrefix: true, 
		showStepNumberAsIcon: false,
		headerVertical: true,
		headerFullHeight: true,
		horizontalSizes: '230px auto'
	});
	demoWizardSteps = [
		new WizardStepModel({ header: { label: "Personal Information" }}),
		new WizardStepModel({ header: { label: "Info about the spouse" }}),
		new WizardStepModel({ header: { label: "Info about the kids" }}),
		new WizardStepModel({ header: { label: "Profile summary" }}),
	];
	
	personName = new InputModel({value: '', placeholder: '', icon: null, maxlength: 30});
	personAge = new InputModel({value: '', placeholder: 'Number of years:', icon: null, maxlength: 3});
	personEmail = new InputModel({value: '', placeholder: '', icon: null, maxlength: 30});
	personPhone = new InputModel({value: '', placeholder: '10 digits number:', icon: null, maxlength: 14});
	
	spouseName = new InputModel({value: '', placeholder: '', icon: null, maxlength: 30});
	spouseAge = new InputModel({value: '', placeholder: 'Number of years:', icon: null, maxlength: 3});
	spouseEmail = new InputModel({value: '', placeholder: '', icon: null, maxlength: 30});
	spousePhone = new InputModel({value: '', placeholder: '10 digits number:', icon: null, maxlength: 14});

	isMarried = new SelectableModel({ checked: false });
	
	phonePattern = /^[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}$/;
	emailPattern = /^.+@.+\..+$/;

	lastActiveStep = 0;

	isValidNumber(value) {
		var v = parseFloat(value);
		return ( isNaN(v) || v <= 0 ) ? false : true;
	}

	validateData() {
		var isValid = true;
		var showSpouse = true;

		if( this.personName.value === '' ) isValid = false;
		if( !this.isValidNumber(this.personAge.value) ) isValid = false; 
		if( !this.emailPattern.test(this.personEmail.value) ) isValid = false;
		if( !this.phonePattern.test(this.personPhone.value) ) isValid = false;
		if( this.isMarried.checked ) {
			if( this.spouseName.value === '' ) isValid = false;	
			if( !this.isValidNumber(this.spouseAge.value) ) isValid = false; 
			if( !this.emailPattern.test(this.spouseEmail.value) ) isValid = false;
			if( !this.phonePattern.test(this.spousePhone.value) ) isValid = false;
		}
		for (var i = 0; i < this.kids.length; ++i) {
			if( !this.isValidNumber(this.kids[i].age.value) ) isValid = false; 
		}
		if( this.wizardRef.activeStepIndex === 0 ) {
			this.wizardRef.cfWizard.nextButton.disable = isValid ? false : true;
			this.demoWizardSteps[3].disable = isValid ? false : true;
		}
		if( this.wizardRef.activeStepIndex === 1 ) {
			this.wizardRef.cfWizard.nextButton.disable = isValid ? false : true;
			this.demoWizardSteps[3].disable = isValid ? false : true;
		}
		if( this.wizardRef.activeStepIndex === 2 ) {
			this.wizardRef.properties.nextButton.disable = isValid ? false : true;
			this.demoWizardSteps[3].disable = isValid ? false : true;
		}
		this.lastActiveStep = this.wizardRef.activeStepIndex;
	};

	formatPhone(phone) {
		var onlyNumbers = phone.replace(/\D/g, ''),
				formatted = onlyNumbers.match(/^(\d{3})(\d{3})(\d{4})$/);

	  return (!formatted) ? null : "(" + formatted[1] + ") " + formatted[2] + "-" + formatted[3];
	};

	formatPersonPhone(person) {
		var formattedPhone = person==='person' ? this.formatPhone(this.personPhone.value) : this.formatPhone(this.spousePhone.value);
		
		if( formattedPhone ) {
			if( person === 'person' ) {
				this.personPhone.value = formattedPhone;
				this.personPhoneEl.val = formattedPhone;
			} else {
				this.spousePhone.value = formattedPhone;
				this.spousePhoneEl.val = formattedPhone;
			}
		}
		this.validateData();	
	}

	onSwitch(isMarried) {
		if(!isMarried) {
			this.demoWizardSteps[1].disable = true;
			if(this.spouseNameEl) this.spouseNameEl.val = '';
			if(this.spouseAgeEl) this.spouseAgeEl.val = '';
			if(this.spouseEmailEl) this.spouseEmailEl.val = '';
			if(this.spousePhoneEl) this.spousePhoneEl.val = '';
			if(this.spouseName) this.spouseName.value = '';
			if(this.spouseAge) this.spouseAge.value = '';
			if(this.spouseEmail) this.spouseEmail.value = '';
			if(this.spousePhone) this.spousePhone.value = '';
		} else {
			this.demoWizardSteps[1].disable = false;
		}
		setTimeout( () => { this.validateData(); }, 0);
	}

	showSpouse = false;
	showKids = false;
	showResult = false;

	showStep() {
		if( !this.showSpouse && this.wizardRef.activeStepIndex === 1 ) this.showSpouse = true;
		if( !this.showKids && this.wizardRef.activeStepIndex === 2 ) this.showKids = true;
		if( !this.showResult && this.wizardRef.activeStepIndex === 3 ) this.showResult = true;
		if( this.wizardRef.activeStepIndex === 1 && this.isMarried.checked !== true ) {
			if( this.lastActiveStep > this.wizardRef.activeStepIndex ) this.wizardRef.previous();
			if( this.lastActiveStep < this.wizardRef.activeStepIndex ) this.wizardRef.next();
		}
		this.lastActiveStep = this.wizardRef.activeStepIndex;
	}

	kids = [];
	addKid() {
		var kidItem = { 
			name: new InputModel({value: '', placeholder: '', icon: null, maxlength: 30}), 
			age: new InputModel({value: '', placeholder: 'Number of years:', icon: null, maxlength: 3}) 
		};
		this.kids.push(kidItem);
		this.validateData();
	}

	constructor(private cfComponentTemplateService: CfComponentTemplateService) { }

	submitInfo() {
		let dialogOptions = {
			title: 'Rent a room',
			okButton: true,
			width: '50%',
			height: '200px',
			dialogType: 'info'
		};

		this.cfComponentTemplateService.showInDialog({
			template: this.confirmDialog,
			dialogOptions: dialogOptions
		});

		this.demoWizardSteps[0].disable = true;
		this.demoWizardSteps[1].disable = true;
		this.demoWizardSteps[2].disable = true;
		this.demoWizardSteps[3].disable = true;
		this.wizardRef.cfWizard.previousButton.disable = true;
		this.wizardRef.cfWizard.nextButton.disable = true;
		this.wizardRef.cfWizard.finishButton.disable = true;
	}

	ngAfterViewInit() {
		setTimeout(() => {
			this.demoWizardSteps[1].disable = true;
			this.demoWizardSteps[3].disable = true;
			this.wizardRef.properties.nextButton.disable = true;
		}, 2000);
	}
}
