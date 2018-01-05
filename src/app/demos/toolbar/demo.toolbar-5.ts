import { Component, ViewChild } from '@angular/core';
import { DialogModel, ToolbarModel, ToolbarStylingModel, FabModel, CfComponentTemplateService } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-toolbar-5',
	templateUrl: './demo.toolbar-5.html',
 	styleUrls: ['./demo.toolbar-5.scss']
})
export class CfDemoToolbar5 {
	@ViewChild('customerDialog') customerDialog;

	constructor(private cfComponentTemplateService: CfComponentTemplateService) {}

	dynamicToolbarsActions = [
		{
			toolbar: new ToolbarModel({ 
				info: { show: false }, 
				content: { title: 'Customer 1' }, 
				close: { show: false }, 
				help: { show: false }, 
				actions: { show: false }, 
				maximization: { show: false }, 
				expandable: { show: false }
			})
		},
		{
			toolbar: new ToolbarModel({ 
				info: { show: false }, 
				content: { title: 'Customer 2' }, 
				close: { show: false }, 
				help: { show: false }, 
				actions: { show: false }, 
				maximization: { show: false }, 
				expandable: { show: false }
			})
		},
		{
			toolbar: new ToolbarModel({ 
				info: { show: false }, 
				content: { title: 'Customer 3' }, 
				close: { show: false }, 
				help: { show: false }, 
				actions: { show: false }, 
				maximization: { show: false }, 
				expandable: { show: false }
			})
		},
	];

	toolbarsActionsStyling = new ToolbarStylingModel({
		container: { class: 'cf-blue-theme toolbar-instance' },
		toolbar: { 
			class: 'mat-primary',
			content: { 
				class: 'my-toolbar-actions' 
			}
		},
	});

	fabActions = [
  	{ button: { label: 'Delete', iconProperty: { name: 'close' } } },
  	{ button: { label: 'Edit', iconProperty: { name: 'edit' } } },
  	{ button: { label: 'Information', iconProperty: { name: 'info' } } },
	];

	showDialog() {
		let dialogOptions = {
			properties: new DialogModel({
				width: '50%',
				header: {
					toolbar: {
						type: this.actionType,
						content: {
							title: this.currentCustomer
						}					
					}
				},
				content: {
					template: this.customerDialog					
				}
			})
		};

		this.cfComponentTemplateService.showInDialog( dialogOptions );
	};

	actionType = '';
	currentCustomer = '';
	informAbout(e, i) {
		if (i<1) this.currentCustomer = 'Customer 1';
		if (i===1) this.currentCustomer = 'Customer 2';
		if (i>1) this.currentCustomer = 'Customer 3';
		if (e.cfIndex<1) this.actionType = 'error';
		if (e.cfIndex===1) this.actionType = 'warning';
		if (e.cfIndex>1) this.actionType = 'info';
		this.showDialog();
	}
}