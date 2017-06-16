import { Component } from '@angular/core';
import { SelectableModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-checkbox-3',
	templateUrl: './demo.checkbox-3.html',
	styleUrls: ['./demo.checkbox-3.scss']
})

export class CfDemoCheckbox3{
	fruits: Object[]= [
		{ value:"apl", item: 'Apple (themeColor)', checked:true },
		{ value: 'wtm', item: 'Watermelon (themeColor and will show/hide avatars)', checked:false },
		{ value: 'ban', item: 'Banana (primary)', checked:true },
		{ value: 'lim', item: 'Lime (accent)', checked:false },
		{ value: 'per', item: 'Pear (warn)', checked:false }
	];
}
