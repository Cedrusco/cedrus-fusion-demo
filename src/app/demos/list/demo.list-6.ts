import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { NotificationModel, ProductCardModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-list-6',
	templateUrl: './demo.list-6.html',
 	styleUrls: ['./demo.list-6.scss']
})

export class CfDemoList6 {
	@ViewChild('sidenav') sidenav: MdSidenav;
		

	contact='';
	editingIndex;
	questions = [
		{
			questionID: "name",
			componentType: "input",
			label:"Name",
			type:"text",
			value: "",
			required: true,
			key: "name"
		},
		{
			questionID: "email",
			componentType: "input",
			label:"Email",
			type:"text",
			value: "",
			required: true,
			key: "email"
		},
		{
			questionID: "address",
			componentType: "input",
			label:"Address",
			type:"text",
			value: "",
			required: true,
			key: "address"
		},
		{
			questionID: "phoneNumber",
			componentType: "input",
			label:"Phone Number",
			type:"text",
			value: "",
			required: true,
			key: "phoneNumber"
		}
	];
	contacts = [
		{"name":"Joe G Bell", "email":"joebell@gmail.com", "address":"1240 Bard Ln NE, Palm Bay, FL, 32905","phoneNumber":"(321) 727-0914"},
		{"name":"Billie J Smith", "email":"billiesmith@gmail.com", "address":"112 Fawnvue Dr, Mc Kees Rocks, PA, 15136","phoneNumber":"(412) 489-5444"},
		{"name":"Allan Smith", "email":"alansmith@gmail.com", "address":"426 Brook Cir, Hurricane, WV, 25526","phoneNumber":"(304) 562-5680"}
	]
	payload = {
		name:"Joe G Bell",
		email:'joebell@gmail.com', 
		address:'1240 Bard Ln NE, Palm Bay, FL, 32905',
		phoneNumber:'(321) 727-0914'
	};

	editContact(index, contactChosen) {
		this.sidenav.open();
		this.editingIndex = index;
		this.payload = contactChosen;
		console.log(this.payload);
	}

}
