import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { 
	AlertModel,
	IconModel, 
	InputModel, 
	ImageModel, 
	ImageStylingModel,
	SelectModel,
	ButtonStylingModel,
	CfAlertsService,
	DialogModel, DialogService
} from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-list-6',
	templateUrl: './demo.list-6.html',
 	styleUrls: ['./demo.list-6.scss']
})

export class CfDemoList6 {
	@ViewChild('userMessages') userMessages;
	@ViewChild('userInfo') userInfo: MdSidenav;
	@ViewChild('userEdit') userEdit: MdSidenav;
	@ViewChild('addNewUser', { read: TemplateRef }) addNewUser: TemplateRef<any>;

	constructor(private dialogService: DialogService, private alertsService: CfAlertsService) {}

	currentUser={};
	editingIndex;
	
	users = [
		{
			"name":"Joe G Bell", 
			"image":"src/app/assets/images/material_avatars/doctor_man_material.png", 
			"company":"MEDICROIX", 
			"address":"1240 Bard Ln NE, Palm Bay, FL, 32905",
			"role":"Doctor",
			"salary":"8000.33"
		},
		{
			"name":"Billie J Smith", 
			"image":"src/app/assets/images/material_avatars/cool_man_material.png", 
			"company":"TUBESYS", 
			"address":"112 Fawnvue Dr, Mc Kees Rocks, PA, 15136",
			"role":"Engenier",
			"salary":"15500.50"
		},
		{
			"name":"Allan Smith", 
			"image":"src/app/assets/images/material_avatars/agent_material.png", 
			"company":"FLEETMIX", 
			"address":"426 Brook Cir, Hurricane, WV, 25526",
			"role":"Chief of security",
			"salary":"23000.23"
		},
		{
			"name":"Carl D Smith", 
			"image":"src/app/assets/images/material_avatars/call_center_operator_material.png", 
			"company":"PEARLESSA", 
			"address":"698 Johnny Parrish Rd, Batesburg, SC, 29006",
			"role":"Operator",
			"salary":"6500.00"
		},
		{
			"name":"Bob Smith", 
			"image":"src/app/assets/images/material_avatars/driver_material.png", 
			"company":"VIRXO", 
			"address":"383 S Dade 61, Lockwood, MO, 65682",
			"role":"Driver",
			"salary":"10200.18"
		},
		{
			"name":"Maxine Smith", 
			"image":"src/app/assets/images/material_avatars/scientist_woman_material.png", 
			"company":"UPLINX", 
			"address":"6418 160th Avenue Ct E #D, Sumner, WA, 98390",
			"role":"Surgeon",
			"salary":"18300.00"
		},
		{
			"name":"Carrie Smith", 
			"image":"src/app/assets/images/material_avatars/writer_woman_material.png", 
			"company":"GLASSTEP", 
			"address":"Po Box 149, Dunn Loring, VA, 22027",
			"role":"Writer",
			"salary":"9800.00"
		},
		{
			"name":"George W Smith", 
			"image":"src/app/assets/images/material_avatars/watchman_material.png", 
			"company":"ROCKLOGIC", 
			"address":"3448 Bentley Rd, Linesville, PA, 164",
			"role":"Watchman",
			"salary":"7300.00"
		}
	];

	payload = {
		image:'',
		name:'',
		address:'',
		company:'', 
		role:'',
		salary:''
	};

	avatarImage = new ImageModel({ label:"", url: "" });
	nameInput = new InputModel({ value:"",placeholder:"Name", maxlength: 45, iconPosition:"left",iconProperty: new IconModel({ name:"fa-user" }) });
	addressInput = new InputModel({ value:"",placeholder:"Address", maxlength: 45, iconPosition:"left",iconProperty: new IconModel({ name:"fa-map-marker" }) });
	companyInput = new InputModel({ value:"",placeholder:"Company", maxlength: 45, iconPosition:"left",iconProperty: new IconModel({ name:"fa-building" }) });
	roleInput = new InputModel({ value:"",placeholder:"Role", maxlength: 45, iconPosition:"left",iconProperty: new IconModel({ name:"fa-universal-access" }) });
	salaryInput = new InputModel({ value:"",placeholder:"Salary", maxlength: 45, iconPosition:"left",iconProperty: new IconModel({ name:"fa-usd" }) });

	questions = [
		{
			questionID: "name",
			componentType: "input",
			label:"Name",
			type:"text",
			maxlength: 45,
			value: "",
			required: true,
			key: "name"
		},
		{
			questionID: "company",
			componentType: "input",
			label:"Company",
			type:"text",
			maxlength: 45,
			value: "",
			required: true,
			key: "company"
		},
		{
			questionID: "address",
			componentType: "input",
			label:"Address",
			type:"text",
			maxlength: 45,
			value: "",
			required: true,
			key: "address"
		},
		{
			questionID: "role",
			componentType: "input",
			label:"Role",
			type:"text",
			maxlength: 45,
			value: "",
			required: true,
			key: "role"
		},
		{
			questionID: "salary",
			componentType: "input",
			label:"Salary",
			type:"text",
			maxlength: 45,
			value: "",
			required: true,
			key: "salary"
		}
	];

	show(userChosen) {
		this.userInfo.open();		
		this.currentUser = userChosen;
	}	

	edit(index, userChosen) {
		this.userInfo.close();
		this.userEdit.open();
		this.editingIndex = index;
		this.payload = userChosen;
	}	

	delete(index) {
		this.userInfo.close();
		
		let dialogOptions = {
			properties: new DialogModel({
				width: '450px',
				header: {
					toolbar: {
						type: 'warning',
						content: {
							title: 'Delete user'
						}
					}
				},
				content: {
					message: 'Are you are sure you want to delete user?'
				}	
			})
		};
		
		dialogOptions['okCallback'] = (result) => {
			this.users.splice(index, 1);
			this.sendMessage('delete');
		};

		this.dialogService.show( dialogOptions );
	}

	updateUser(data) {
		Object.assign(this.users[this.editingIndex], JSON.parse(data));
		this.userEdit.close();
		this.sendMessage('edit');
	}

	private addUser() {
		let person = {
			image: this.avatarImage.url,
			name: this.nameInput.value,
			address: this.addressInput.value,
			company: this.companyInput.value,
			role: this.roleInput.value,
			salary: this.salaryInput.value,
		} 
		this.users.push(person);
		this.sendMessage('add');
	}

	showAdd() {
		let dialogOptions = {
			properties: new DialogModel({
				width: '65%',
				header: { toolbar: { content: { title: 'Fill all information about new user and select avatar' }}},
				content: { template: this.addNewUser },
				footer: { okButton: { show: false } }
			})
		};
		
		this.avatarImage.url = '';

		dialogOptions['okCallback'] = (result) => {
			this.addUser();
		};

		this.dialogService.show( dialogOptions );
	};

	setAvatar(url) {
		this.avatarImage.url = url;
		this.validateUser();
	}

	isValidNumber(value) {
		var v = false;
		if( /^\d+$/.test(value) || /^\d+\.\d+$/.test(value) ) { v = true; }
		return v;
	}

	validateUser() {
		let isValid = true;
		if( this.avatarImage.url.length < 2 ) isValid = false;
		if( this.nameInput.value.length < 2 ) isValid = false;
		if( this.addressInput.value.length < 2 ) isValid = false;
		if( this.companyInput.value.length < 2 ) isValid = false;
		if( this.roleInput.value.length < 2 ) isValid = false;
		if( !this.isValidNumber(this.salaryInput.value) ) isValid = false;
		this.dialogService.dialogOptions.properties.footer.okButton.show = isValid ? true : false;
	}

	messageForUser = new AlertModel({
		content: {
			message: ""
		},
    confirm: { show: false },
    cancel: { show: false },
  });

	sendMessage(actionType) {
		switch (actionType) {
		 	case "add": this.messageForUser.content.message = "New user was successfully added"; break;
		 	case "edit": this.messageForUser.content.message = "User was successfully edited"; break;
		 	case "delete": this.messageForUser.content.message = "User was successfully deleted"; break;
		} 
		this.userMessages.showMessage(this.messageForUser); 
	}

	avaStyle = new ImageStylingModel({ image: { class: 'user-photo' } });	
	miniButtonStyle = new ButtonStylingModel({ button: { class: 'my-mini-button mat-mini-fab mat-primary' } });
	imagesList = [
		'src/app/assets/images/material_avatars/actor_material.png',
		'src/app/assets/images/material_avatars/actress_material.png',
		'src/app/assets/images/material_avatars/agent_asian_material.png',
		'src/app/assets/images/material_avatars/agent_material.png',
		'src/app/assets/images/material_avatars/anonymous_girl_material.png',
		'src/app/assets/images/material_avatars/anonymous_material.png',
		'src/app/assets/images/material_avatars/anonymous2_girl_material.png',
		'src/app/assets/images/material_avatars/anonymous2_material.png',
		'src/app/assets/images/material_avatars/anonymous3_girl_material.png',
		'src/app/assets/images/material_avatars/anonymous3_material.png',
		'src/app/assets/images/material_avatars/astronaut_material.png',
		'src/app/assets/images/material_avatars/basketball_man_material.png',
		'src/app/assets/images/material_avatars/Bellboy_2_material.png',
		'src/app/assets/images/material_avatars/Bellboy_material.png',
		'src/app/assets/images/material_avatars/bishop_african_material.png',
		'src/app/assets/images/material_avatars/bomberman2_material.png',
		'src/app/assets/images/material_avatars/boxer_hispanic_material.png',
		'src/app/assets/images/material_avatars/bride_hispanic_material.png',
		'src/app/assets/images/material_avatars/call_center_operator_female_material.png',
		'src/app/assets/images/material_avatars/call_center_operator_material.png',
		'src/app/assets/images/material_avatars/cashier_woman_material.png',
		'src/app/assets/images/material_avatars/cheff_female_blonde_material.png',
		'src/app/assets/images/material_avatars/cook_woman_fast_food_redhead_material.png',
		'src/app/assets/images/material_avatars/cook2_man_material.png',
		'src/app/assets/images/material_avatars/cook2_woman_red_head_material.png',
		'src/app/assets/images/material_avatars/cool_man_material.png',
		'src/app/assets/images/material_avatars/doctor_Female_Hispanic_material.png',
		'src/app/assets/images/material_avatars/doctor_Female_material.png',
		'src/app/assets/images/material_avatars/doctor_man_material.png',
		'src/app/assets/images/material_avatars/driver_material.png',
		'src/app/assets/images/material_avatars/elegant_man2_material.png',
		'src/app/assets/images/material_avatars/engineering_woman_blonde_material.png',
		'src/app/assets/images/material_avatars/engineering2_material.png',
		'src/app/assets/images/material_avatars/football_soccer_man_material.png',
		'src/app/assets/images/material_avatars/maid_brunette_material.png',
		'src/app/assets/images/material_avatars/man_hispanic_material.png',
		'src/app/assets/images/material_avatars/man_material.png',
		'src/app/assets/images/material_avatars/matrix_agent_smith_material.png',
		'src/app/assets/images/material_avatars/matrix_trinity_material.png',
		'src/app/assets/images/material_avatars/mature_woman_hispanic_material.png',
		'src/app/assets/images/material_avatars/nurse_girl_blonde_material.png',
		'src/app/assets/images/material_avatars/paramedic_man_hispanic_material.png',
		'src/app/assets/images/material_avatars/paramedic_woman_hispanic_material.png',
		'src/app/assets/images/material_avatars/police_woman2_material.png',
		'src/app/assets/images/material_avatars/pope_material.png',
		'src/app/assets/images/material_avatars/priest_hispanic_material.png',
		'src/app/assets/images/material_avatars/rich_material.png',
		'src/app/assets/images/material_avatars/scientist_asian_material.png',
		'src/app/assets/images/material_avatars/scientist_woman_material.png',
		'src/app/assets/images/material_avatars/session_girl_material.png',
		'src/app/assets/images/material_avatars/session_man_material.png',
		'src/app/assets/images/material_avatars/surgeon_hispanic_material.png',
		'src/app/assets/images/material_avatars/The_walking_dead_glenn_material.png',
		'src/app/assets/images/material_avatars/The_walking_dead_governor_material.png',
		'src/app/assets/images/material_avatars/watchman_hispanic_material.png',
		'src/app/assets/images/material_avatars/watchman_material.png',
		'src/app/assets/images/material_avatars/woman_blonde_material.png',
		'src/app/assets/images/material_avatars/woman_material.png',
		'src/app/assets/images/material_avatars/writer_man_african_material.png',
		'src/app/assets/images/material_avatars/writer_man_material.png',
		'src/app/assets/images/material_avatars/writer_woman_material.png',
	];
}