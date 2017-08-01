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
	@ViewChild('spouseNameEl') spouseNameEl;
	@ViewChild('spouseAgeEl') spouseAgeEl;
	@ViewChild('spouseEmailEl') spouseEmailEl;
	@ViewChild('spousePhoneEl') spousePhoneEl;

	infoTabsSteps = [
		new TabsCardModel({ header: { label: "Personal Information" }}),
		new TabsCardModel({ header: { label: "Info about the spouse" }}),
		new TabsCardModel({ header: { label: "Profile summary" }}),
	];
	
	personName = 	new InputModel({value: '', placeholder: '', icon: null, maxlength: 30});
	personAge = 	new InputModel({value: '', placeholder: 'Number of years:', icon: null, maxlength: 3});
	personEmail = new InputModel({value: '', placeholder: '', icon: null, maxlength: 30});
	personPhone = new InputModel({value: '', placeholder: 'Format: (XXX) XXX-XXXX', icon: null, maxlength: 14});
	personKids = 	new InputModel({value: '', placeholder: 'Number of kids:', icon: null, maxlength: 2});
	
	spouseName = 	new InputModel({value: '', placeholder: '', icon: null, maxlength: 30});
	spouseAge = 	new InputModel({value: '', placeholder: 'Number of years:', icon: null, maxlength: 3});
	spouseEmail = new InputModel({value: '', placeholder: '', icon: null, maxlength: 30});
	spousePhone = new InputModel({value: '', placeholder: 'Format: (XXX) XXX-XXXX', icon: null, maxlength: 14});

	isMarried = new SelectableModel({ checked: false });
	
	phonePattern = /^[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}$/;
	emailPattern = /^.+@.+\..+$/;

	validateData() {
		var isValid = true;
		var showSpouse = true;
		var personAge = Number( this.personAge.value );
		var spouseAge = Number( this.spouseAge.value );
		var personKids = Number( this.personKids.value );

		if( this.personName.value === '' ) isValid = false;
		if( this.personAge.value === '') {
			isValid = false; 
		} else {
			if( !Number.isInteger(personAge) ) isValid = false; 
		}
		if( !this.emailPattern.test(this.personEmail.value) ) isValid = false;
		if( !this.phonePattern.test(this.personPhone.value) ) isValid = false;
		if( this.isMarried.checked ) {
			if( this.personKids.value === '' || this.personKids.value === ' ' ) {
				isValid = false;	
			} else {
				if ( personKids < 0 || !Number.isInteger(personKids) ) isValid = false; 
			}
			if( this.spouseName.value === '' ) isValid = false;	
			if( this.spouseAge.value === '') {
				isValid = false;
			} else {
				if ( spouseAge <= 0 || !Number.isInteger(spouseAge) ) isValid = false; 
			}
			if( !this.emailPattern.test(this.spouseEmail.value) ) isValid = false;
			if( !this.phonePattern.test(this.spousePhone.value) ) isValid = false;
		}
		this.tabRef._cards[2]['isValid'] = !isValid ? false : true;
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
