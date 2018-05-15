import { Component } from '@angular/core';
import { IconModel, DatatableModel, DatatableStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-datatable-4',
	templateUrl: './demo.datatable-4.html',
 	styleUrls: ['./demo.datatable-4.scss']
})

export class CfDemoDatatable4 {

	rows = [
		{ 
			name: 'Austin', 
			city: 'London',
			info: {
				avatar: 'http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png',
				company: 'British American Tobacco',
				age: 33,
				description: 'Impedit ut deleniti nulla ea, iure nam. Consequuntur, atque architecto similique facere explicabo, hic iusto esse fugiat totam, distinctio perspiciatis maiores odit.'
			},
			detailsTemplate: 'fullInfo',
		},
		{ 
			name: 'Molly', 
			city: 'Denver',
			info: {
				avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/fh04.png',
				company: 'General Motors',
				age: 26,
				description: 'Esse itaque inventore commodi deleniti, animi quas nam cupiditate nobis ullam. Minima, rerum ratione. Sequi, amet fuga voluptas id nobis corporis tempora.'
			},
			detailsTemplate: 'shortInfo',
		},
		{ 
			name: 'Raiden', 
			city: 'Tokyo',
			info: {
				avatar: 'http://erik-agency.cz/wp-content/uploads/2016/09/avatar2.png',
				company: 'Nissan Motor',
				age: 27,
				description: 'Nostrum, possimus expedita voluptatum iure quam asperiores corrupti minus in ex repudiandae doloribus eius suscipit cupiditate voluptate harum doloremque debitis distinctio dolore.'
			},
			detailsTemplate: 'fullInfo',
		},
		{ 
			name: 'Mia', 
			city: 'Rio de Janeiro',
			info: {
				avatar: 'https://www.tm-town.com/assets/default_female300x300-af1ea9327d6293733a8874dbd97ce49e.png',
				company: 'Banco Bradesco',
				age: 25,
				description: 'Repellendus eius quam, ex itaque ea ipsa molestias unde cumque, rerum deserunt sunt possimus porro minus, totam vitae a, in omnis eveniet!'
			},
			detailsTemplate: 'shortInfo',
		},
		{ 
			name: 'Diego', 
			city: 'Madrid',
			info: {
				avatar: 'https://www.iconspng.com/images/cartoon-man-avatar/cartoon-man-avatar.jpg',
				company: 'Vueling Airlines',
				age: 35,
				description: 'Aspernatur iure quas quod sit aperiam, eveniet, est porro ipsum reprehenderit possimus esse, ut aliquid quis explicabo doloribus consectetur excepturi dolore inventore?'
			},
			detailsTemplate: 'fullInfo',
		}
	];

	myDatatable = new DatatableModel({
		rows: this.rows,
		expandable: true,
		limit: 3,
		rowHeight: 70,
		columnMode: 'standard',
		rowExpand: 'single',
		expandIcon: new IconModel({name: 'arrow_forward', size: '16px'}),
		collapseIcon: new IconModel({name: 'arrow_downward', size: '16px'}),
	});

	myDatatableStyles = new DatatableStylingModel({
		container: { class: 'my-table-container' },
		header: { class: 'my-table-header' },
		footer: { class: 'my-table-footer' },
	});
}