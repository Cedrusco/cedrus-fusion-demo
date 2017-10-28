import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-datatable-2',
	templateUrl: './demo.datatable-2.html',
 	styleUrls: ['./demo.datatable-2.scss']
})

export class CfDemoDatatable2 implements OnInit {
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
		expandable: true,
		limit: undefined
	});

	@ViewChild('datatableComponent') datatableComponent;

	ngOnInit() {
		setTimeout(() => {
			this.datatableComponent.datatableElement.rowDetail.expandAllRows();
		}, 1000);
	}
}
