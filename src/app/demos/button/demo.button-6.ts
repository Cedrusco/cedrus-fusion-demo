import { Component } from '@angular/core';
import { ButtonModel, IconModel, ButtonStylingModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-button-6',
	templateUrl: './demo.button-6.html',
	styleUrls: ['./demo.button-6.scss']
})
export class CfDemoButton6{

	admin = true;
	
	message ="";
	delete=false;
	edit=false;

	customers = [
		{ FN:"Sarah", LN:"Bacha", email:"sarahbacha@gmail.com" },
		{ FN:"Saeid", LN:"Eid", email:"saeideid@gmail.com" },
		{ FN:"Nicholas", LN:"Jabbour", email:"nicholasjabbour@gmail.com" },
		{ FN:"Hanna", LN:"Al Jaliss", email:"hanna@gmail.com" }
	]

	editCustomer (index) {
		var customer = this.customers[index];
		this.message ="Editing customer "+ customer.FN+" "+customer.LN;
		this.delete=false;
		this.edit=true;
	}

	deleteCustomer (index) {
		var customer = this.customers[index];
		this.message ="Deleting customer "+ customer.FN+" "+customer.LN;
		this.delete=true;
		this.edit=false;
	}

	deleteIcon = new IconModel({
		name: "delete",
		size: "20px"
	});
	deleteBTN= new ButtonModel ({
		label: "",
    iconProperty: this.deleteIcon
	});

	editIcon = new IconModel({
		name: "edit",
		size: "20px"
	});
	editBTN= new ButtonModel ({
		label: "",
    iconProperty: this.editIcon
	});
	btnStyling = new ButtonStylingModel ({
		iconStyling : {
			icon:{
				dynamicClass: {
					"delete" : "this.properties.name == 'delete'",
					"edit" : "this.properties.name == 'edit'"
				}
			}
		}
	})
}
