import { Component } from '@angular/core';
import { DatatableModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-datatable-1',
	templateUrl: './demo.datatable-1.html',
 	styleUrls: ['./demo.datatable-1.scss']
})

export class CfDemoDatatable1 {
	rowsData = [
		{
			"name":"Joe G Bell", 
			"city":"Palm Bay", 
			"details": {
				"email":"joebell@gmail.com", 
				"address":"1240 Bard Ln NE, Palm Bay, FL, 32905",
				"phoneNumber":"(321) 727-0914"
			}
		},
		{
			"name":"Billie J Smith", 
			"city":"Mc Kees Rocks", 
			"details": {
				"email":"billiesmith@gmail.com", 
				"address":"112 Fawnvue Dr, Mc Kees Rocks, PA, 15136",
				"phoneNumber":"(412) 489-5444"
			}
		},
		{
			"name":"Allan Smith", 
			"city":"Hurricane", 
			"details": {
				"email":"alansmith@gmail.com", 
				"address":"426 Brook Cir, Hurricane, WV, 25526",
				"phoneNumber":"(304) 562-5680"
			}
		},
		{
			"name": "Dillon Hebert",
			"city":"Welch", 
			"details": {
				"email": "dillonhebert@gmail.com",
				"address":"135 Hastings Street, Welch, Marshall Islands, 7911",
				"phoneNumber":"(692) 239-4310"
			}
		},
		{
			"name":"Adriana Burris", 
			"city":"Sisquoc", 
			"details": {
				"email":"adrianaburris@gmail.com",
				"address":"308 Lloyd Court, Sisquoc, Indiana, 1140",
				"phoneNumber":"(866) 585-9482"
			}
		}
	];

	myDatatable = new DatatableModel({
		rows: this.rowsData,
		expandable: true
	});
}
