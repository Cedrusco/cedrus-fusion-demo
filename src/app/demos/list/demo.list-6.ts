import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { CfComponentTemplateService, InputModel, IconModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-list-6',
	templateUrl: './demo.list-6.html',
 	styleUrls: ['./demo.list-6.scss']
})

export class CfDemoList6 {
	@ViewChild('sidenav') sidenav: MdSidenav;
	@ViewChild('addView', { read: TemplateRef }) addView: TemplateRef<any>;

	constructor(private cfComponentTemplateService: CfComponentTemplateService) {}

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
		{"name":"Allan Smith", "email":"alansmith@gmail.com", "address":"426 Brook Cir, Hurricane, WV, 25526","phoneNumber":"(304) 562-5680"},
		{"name":"Carl D Smith", "email":"carlsmith@gmail.com", "address":"698 Johnny Parrish Rd, Batesburg, SC, 29006","phoneNumber":"(803) 532-9328"},
		{"name":"Bob Smith", "email":"bobsmith@gmail.com", "address":"383 S Dade 61, Lockwood, MO, 65682","phoneNumber":"(417) 232-4364"},
		{"name":"Maxine Smith", "email":"maxinesmith@gmail.com", "address":"6418 160th Avenue Ct E #D, Sumner, WA, 98390","phoneNumber":"(304) 646-7424"},
		{"name":"Carrie Smith", "email":"carriesmith@gmail.com", "address":"Po Box 149, Dunn Loring, VA, 22027","phoneNumber":"(205)-286-7253"},
		{"name":"George W Smith", "email":"georgewsmith@gmail.com", "address":"3448 Bentley Rd, Linesville, PA, 164","phoneNumber":"(814) 927-2653"}
	]
	payload = {
		name:"Joe G Bell",
		email:'joebell@gmail.com', 
		address:'1240 Bard Ln NE, Palm Bay, FL, 32905',
		phoneNumber:'(321) 727-0914'
	};

	nameInput = new InputModel ({
		placeholder:"Name",
		maxlength: 45,
		iconProperty : null
	});

	emailInput = new InputModel ({
		placeholder:"Email",
		maxlength: 45,
		iconProperty : new IconModel ({
			name:"fa-envelope-o"
		})
	});

	addressInput = new InputModel ({
		placeholder:"Address",
		maxlength: 45,
		iconProperty : new IconModel ({
			name:"fa-map-marker"
		})
	});

	phoneNumberInput = new InputModel ({
		placeholder:"Phone Number",
		maxlength: 45,
		iconProperty : new IconModel ({
			name:"fa-phone"
		})
	});

	editContact(index, contactChosen) {
		this.sidenav.open();
		this.editingIndex = index;
		this.payload = contactChosen;
	}

	updateContact(data) {
		console.log(data);
		this.contacts[this.editingIndex] = JSON.parse(data);
		this.sidenav.close();
	}

	private addContact (contact) {
		this.contacts.push(contact);
	}

	showAdd() {
		let dialogOptions = {
			title: 'New Contact',
			okButton: true,
			width: '20%',
			height: '50%',
			disableClose: false,
			dialogType:'info'
		};
		dialogOptions['okCallback'] = (result) => {
			// this.addContact(result)
			console.log(result);
		};

		this.cfComponentTemplateService.showInDialog({
			template: this.addView,
			dialogOptions: dialogOptions
		});
	}

}
