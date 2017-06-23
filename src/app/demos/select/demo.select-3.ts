import { Component } from '@angular/core';
import { SelectModel, InputModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-select-3',
	templateUrl: './demo.select-3.html',
	styleUrls: ['./demo.select-3.scss']
})

export class CfDemoSelect3 {
	
	selectedCountry: string = 'us';

	addressOne = new InputModel ({
		type : "text",
		placeholder: "Address",
		dividerColor : "midnightblue",
		maxlength: 1000
	});

	addressTwo = new InputModel ({
		type : "text",
		placeholder: "Address 2",
		dividerColor : "midnightblue",
		maxlength: 1000
	});

	city = new InputModel ({
		type : "text",
		placeholder: "City",
		dividerColor : "midnightblue",
		maxlength: 1000
	});

	county = new InputModel ({
		type : "text",
		placeholder: "County",
		dividerColor : "midnightblue",
		maxlength: 1000
	});

	pc = new InputModel ({
		type : "text",
		placeholder: "Postal Code",
		dividerColor : "midnightblue",
		maxlength: 1000
	});

	state = new InputModel ({
		type : "text",
		placeholder: "State",
		dividerColor : "midnightblue",
		maxlength: 1000
	});

	province = new InputModel ({
		type : "text",
		placeholder: "Province",
		dividerColor : "midnightblue",
		maxlength: 1000
	});

	zip = new InputModel ({
		type : "text",
		placeholder: "ZIP code",
		dividerColor : "midnightblue",
		maxlength: 1000
	});

	updateCountry() {
		this.selectedCountry = this.myCountry.selected;
	}

	myCountry = new SelectModel ({
		placeholder: 'Select country: ',
		items: [
			{itemValue: 'us', itemLabel: 'USA'},
			{itemValue: 'uk', itemLabel: 'UK'},
			{itemValue: 'ca', itemLabel: 'Canada'}
		],
		selected: this.selectedCountry,
		showFilter: false
	});
}
