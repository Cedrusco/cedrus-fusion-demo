import { Component, ViewChild } from '@angular/core';
import { InputModel, IconModel, MenuModel, DialogModel, DialogService } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-input-3',
	templateUrl: './demo.input-3.html',
 	styleUrls: ['./demo.input-3.scss']
})

export class CfDemoInput3 {
	menuProperties = new MenuModel({
		display: false,
		triggerIcon: new IconModel({ name: "fa-key", size: "20px" }),
		itemsSource: "fromModel",
		menuItems: [
			{
				buttonProperty: {
					label: "Reset password",
					iconProperty: new IconModel({ name: 'delete_forever', size: '24px' }),
				}
			},
			{
				buttonProperty: {
					label: "Approve password",
					iconProperty: new IconModel({ name: 'check_circle', size: '24px' }),
				}
			}
		]
	});

	inputProperties = new InputModel({
		type: "password",
		placeholder: "password",
		maxlength: "15",
		hint: {
			text: "max is 15 chars"
		},
		menu: this.menuProperties
	});

	inputValue: string = '';
	passwordApproved = false;

	@ViewChild('myDialog') myDialog;

	constructor(private dialogService: DialogService) {	}

	checkPassword(password) {
		this.inputProperties.menu.display = password.length > 10 ? true : false;
		this.passwordApproved = false;
	}

	showDialog() {
		let dialogOptions = {
			properties: new DialogModel({
				width: '400px',
				header: {
					toolbar: {
						info: { show: false },
						help: { show: false },
						close: { show: false },
						content: {
							title: 'Your password is:'
						}
					}
				},
				content: {
					template: this.myDialog
				},
				footer: { show: false }
			})
		};
		this.dialogService.show( dialogOptions );
	}

	actionOnPassword(e) {
		if (e.cfIndex === 0) {
			this.inputValue = '';
		} else {
			this.passwordApproved = true;
			this.showDialog();
		}
	}
}
