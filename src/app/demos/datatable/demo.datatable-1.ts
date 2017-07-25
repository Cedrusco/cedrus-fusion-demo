import { Component } from '@angular/core';
import { DatatableModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-datatable-1',
	templateUrl: './demo.datatable-1.html',
 	styleUrls: ['./demo.datatable-1.scss']
})

export class CfDemoDatatable1 {
	myDatatable = new DatatableModel({
		rows: [
			{ name: 'Austin', city: 'London', },
			{ name: 'Molly', city: 'Denver', },
			{ name: 'Raiden', city: 'Tokyo', },
			{ name: 'Mia', city: 'Rio de Janeiro', },
			{ name: 'Diego', city: 'Madrid', },
		]
	});
}
