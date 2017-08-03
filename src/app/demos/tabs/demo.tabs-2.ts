import { Component, Input, Output, OnInit, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { InputModel, 
	ButtonModel, 
	ButtonStylingModel, 
	TabsModel, 
	CfTabsComponent, 
	TabsStylingModel, 
	TabsCardModel, 
	TabsCardStylingModel, 
	SelectableModel 
} from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-tabs-2',
	templateUrl: './demo.tabs-2.html',
 	styleUrls: ['./demo.tabs-2.scss']
})

export class CfDemoTabs2 implements OnInit {
	@ViewChild('personalInfo') tabRef;
	@ViewChild('personPhoneEl') personPhoneEl;
	@ViewChild('spouseNameEl') spouseNameEl;
	@ViewChild('spouseAgeEl') spouseAgeEl;
	@ViewChild('spouseEmailEl') spouseEmailEl;
	@ViewChild('spousePhoneEl') spousePhoneEl;

	infoTabsSteps = [
		new TabsCardModel({ header: { label: "Personal Information" }}),
		new TabsCardModel({ header: { label: "Info about the spouse" }}),
		new TabsCardModel({ header: { label: "Profile summary" }}),
	];
	
	personName = new InputModel({value: '', placeholder: '', icon: null, maxlength: 30});
	personAge = new InputModel({value: '', placeholder: 'Number of years:', icon: null, maxlength: 3});
	personEmail = new InputModel({value: '', placeholder: '', icon: null, maxlength: 30});
	personPhone = new InputModel({value: '', placeholder: '10 digits number:', icon: null, maxlength: 14});
	personKids = new InputModel({value: '', placeholder: 'Number of kids:', icon: null, maxlength: 2});
	
	spouseName = new InputModel({value: '', placeholder: '', icon: null, maxlength: 30});
	spouseAge = new InputModel({value: '', placeholder: 'Number of years:', icon: null, maxlength: 3});
	spouseEmail = new InputModel({value: '', placeholder: '', icon: null, maxlength: 30});
	spousePhone = new InputModel({value: '', placeholder: '10 digits number:', icon: null, maxlength: 14});

	isMarried = new SelectableModel({ checked: false });
	
	phonePattern = /^[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}$/;
	emailPattern = /^.+@.+\..+$/;

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
			if( !this.isValidNumber(this.personKids.value) ) isValid = false; 
			if( this.spouseName.value === '' ) isValid = false;	
			if( !this.isValidNumber(this.spouseAge.value) ) isValid = false; 
			if( !this.emailPattern.test(this.spouseEmail.value) ) isValid = false;
			if( !this.phonePattern.test(this.spousePhone.value) ) isValid = false;
		}
		this.tabRef._cards[2]['isValid'] = !isValid ? false : true;
	}

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
			this.tabRef._cards[1]['isValid'] = false;
			this.personKids.value = '';
			if(this.spouseNameEl) this.spouseNameEl.val = '';
			if(this.spouseAgeEl) this.spouseAgeEl.val = '';
			if(this.spouseEmailEl) this.spouseEmailEl.val = '';
			if(this.spousePhoneEl) this.spousePhoneEl.val = '';
			if(this.spouseName) this.spouseName.value = '';
			if(this.spouseAge) this.spouseAge.value = '';
			if(this.spouseEmail) this.spouseEmail.value = '';
			if(this.spousePhone) this.spousePhone.value = '';
		} else {
			this.tabRef._cards[1]['isValid'] = true;
		}
		setTimeout( () => { this.validateData(); }, 0);
	}

	showSpouse = false;
	showResult = false;
	showCard(card) {
		if (!this.showSpouse && this.tabRef.activeCardIndex === 1) this.showSpouse = true;
		if (!this.showResult && this.tabRef.activeCardIndex === 2) this.showResult = true;
	}

	ngOnInit() {
		setTimeout(() => {
			this.tabRef._cards[1]['isValid'] = false;
			this.tabRef._cards[2]['isValid'] = false;
		}, 0);
	}
}
