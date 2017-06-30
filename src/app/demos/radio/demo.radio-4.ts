import { Component, ViewChildren, ViewChild, QueryList, TemplateRef} from '@angular/core';
import { SelectableModel, CfRadioComponent, CfComponentTemplateService } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-radio-4',
	templateUrl: './demo.radio-4.html',
	styleUrls: ['./demo.radio-4.scss']
})

export class CfDemoRadio4 {

	@ViewChildren(CfRadioComponent) buttons: QueryList<CfRadioComponent>;
	@ViewChild('alert', { read: TemplateRef }) alert: TemplateRef<any>;

	constructor(private cfComponentTemplateService: CfComponentTemplateService) { }

	get checkedRadioButton() {
		if (this.buttons) {
			let checked = this.buttons.toArray().filter(button => {
				return button.checked;
			})
			if (checked.length) return checked[0];
		}
		else return { item: '' };
	}

	things = [
		new SelectableModel({value: 'reg', item: 'Standard Meal', checked: false }),
		new SelectableModel({value: 'veg', item: 'Vegetarian Meal', checked: false }),
		new SelectableModel({value: 'kosher', item: 'Kosher', checked: false }),
	];

	whenSelected(event) {
		if (this.checkedRadioButton.item === 'Vegetarian Meal') {
			this.showAlert();
		}
	}

	showAlert() {
		let dialogOptions = {
			title: 'Alert!',
			okButton: true,
			width: '50%',
			height: '20%',
			disableClose: true,
			dialogType: 'warning'//'warning', 'info', 'error'
		};

		this.cfComponentTemplateService.showInDialog({
			template: this.alert,
			dialogOptions: dialogOptions
		});
	}
}