import { Component} from '@angular/core';
import { SelectableModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-radio-3',
	templateUrl: './demo.radio-3.html',
	styleUrls: ['./demo.radio-3.scss']
})

export class CfDemoRadio3 {
	cars: Object[]= [
		{ value:"bmw", item: 'BMW', checked:false },
		{ value: 'merc', item: 'Mercedes', checked:false },
		{ value: 'ferr', item: 'Ferrari', checked:false },
		{ value: 'por', item: 'Porche', checked:false },
		{ value: 'Jag', item: 'Jaguar', checked:false }
	];
}
