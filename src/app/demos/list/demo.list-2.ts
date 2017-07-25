import { Component} from '@angular/core';
import { ItemStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-list-2',
	templateUrl: './demo.list-2.html',
 	styleUrls: ['./demo.list-2.scss']
})

export class CfDemoList2  {

	contacts = [
		{"name":"Joe G Bell", "email":"joebell@gmail.com", "address":"1240 Bard Ln NE, Palm Bay, FL, 32905","phoneNumber":"(321) 727-0914"},
		{"name":"Billie J Smith", "email":"billiesmith@gmail.com", "address":"112 Fawnvue Dr, Mc Kees Rocks, PA, 15136","phoneNumber":"(412) 489-5444"},
		{"name":"Allan Smith", "email":"alansmith@gmail.com", "address":"426 Brook Cir, Hurricane, WV, 25526","phoneNumber":"(304) 562-5680"}
	]

	itemStyling = new ItemStylingModel ({
		container :{
			class:"container"
		},
		item: {
			class:"myitem"
		},
		selectedItem: {
			class:"myselectedItem"
		}
	})
}
