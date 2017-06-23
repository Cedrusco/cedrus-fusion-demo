import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListModel } from 'cedrus-fusion';
import { ItemStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-list-1',
	templateUrl: './demo.list-1.html',
 	styleUrls: ['./demo.list-1.scss']
})

export class CfDemoList1 {

	myList = new ListModel ({
		title: 'List Component Demo'
	});
	withCheckbox: boolean = false;
	selected = [];
	items = [
			{
				name: 'Austin',
				city: 'London',
				avatar: 'http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png'
			},
			{
				name: 'Molly',
				city: 'Denver',
				avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/fh04.png'
			},
			{
				name: 'Peter',
				city: 'Tokyo',
				avatar: 'http://static.tumblr.com/c172fd03bf2bedb77e13107cb22cdcc1/3rxa3xq/asBo7l3wr/tumblr_static_6fbdkgohxjgoc4c8o8kwoso4k.png'
			}
	];

	itemsStyling = new ItemStylingModel({
			item:{
				class:"normalItem"
			},
			selectedItem :{
				class:"selectedItem"
			}
		});

	log(e){
		this.selected.push(e);
	}

	updateValues($event){
		this.selected = $event;
	}
}
