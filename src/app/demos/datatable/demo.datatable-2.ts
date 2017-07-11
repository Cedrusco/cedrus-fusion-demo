import { Component, Injector, Input, Output, ElementRef, EventEmitter } from '@angular/core';

import { CfDatatableComponent } from 'cedrus-fusion';
import { DatatableModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-datatable-2',
	templateUrl: './demo.datatable-2.html',
 	styleUrls: ['./demo.datatable-2.scss']
})

export class CfDemoDatatable2 {
	rows = [
		{ 
			name: 'Austin', 
			city: 'London',
			info: {
				avatar: 'http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png',
				company: 'British American Tobacco',
				age: 33,
				gender: 'male',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ut deleniti nulla ea, iure nam. Consequuntur, atque architecto similique facere explicabo, hic iusto esse fugiat totam, distinctio perspiciatis maiores odit.'
			}
		},
		{ 
			name: 'Molly', 
			city: 'Denver',
			info: {
				avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/fh04.png',
				company: 'General Motors',
				age: 26,
				gender: 'female',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, repellat magnam eveniet nisi porro culpa ex tenetur quibusdam iste minus nulla corporis beatae. Excepturi, aut ullam earum dicta tempora, soluta!'
			}
		},
		{ 
			name: 'Raiden', 
			city: 'Tokyo',
			info: {
				avatar: 'http://erik-agency.cz/wp-content/uploads/2016/09/avatar2.png',
				company: 'Nissan Motor',
				age: 27,
				gender: 'male',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, in repellendus modi temporibus ratione amet eligendi rem optio quia, ducimus possimus voluptas harum aspernatur veniam consectetur eius accusantium molestiae dolores.'
			}
		},
		{ 
			name: 'Mia', 
			city: 'Rio de Janeiro',
			info: {
				avatar: 'https://www.tm-town.com/assets/default_female300x300-af1ea9327d6293733a8874dbd97ce49e.png',
				company: 'Banco Bradesco',
				age: 25,
				gender: 'female',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, eligendi a porro voluptatem accusantium distinctio ipsum, consectetur odio cupiditate, ut autem quam voluptas repellendus unde suscipit. Sunt, facere laudantium odio.'
			}
		},
		{ 
			name: 'Diego', 
			city: 'Madrid',
			info: {
				avatar: 'http://icons.veryicon.com/ico/Avatar/Face%20Avatars/Male%20Face%20H1.ico',
				company: 'Vueling Airlines',
				age: 35,
				gender: 'male',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nostrum, exercitationem, amet vel incidunt voluptatibus ea, est obcaecati quam nam ullam aliquam. Vel nihil repellat vero totam magnam cumque laborum.'
			}
		}
	];

	myDatatable: DatatableModel = {
		rows: this.rows,
		limit: 3,
		rowHeight: 100,
		filterable: true,
		expandable: true,
		selectable: true,
		selected: [ this.rows[0] ],
		sorted: [{prop: 'name', dir: 'desc'}]
	};

	mySelected = this.myDatatable.selected;

	log(ev): void {
		const indexInMainRows = this.myDatatable.rows.indexOf(ev.cfItem);
		const indexInSelectedRows = this.myDatatable.selected.indexOf(ev.cfItem);
		console.log('ev', ev, ev.cfItem.name, ev.cfItem.city);
		this.myDatatable.rows.splice(indexInMainRows, 1);
		this.myDatatable.selected.splice(indexInMainRows, 1);
		// if(this.mySelected.length > 0 && indexInSelectedRows > -1) this.mySelected.splice(indexInSelectedRows, 1);
	}
}
