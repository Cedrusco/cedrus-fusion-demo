import { Component} from '@angular/core';
import { ListModel } from 'cedrus-fusion';
import { ItemStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-list-2',
	templateUrl: './demo.list-2.html',
 	styleUrls: ['./demo.list-2.scss']
})

export class CfDemoList2  {

	itemsStyling = new ItemStylingModel({
			item:{
				class:"normalItem"
			},
			selectedItem :{
				class:"selectedItem"
			}
		})

}
