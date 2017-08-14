import { Component, ViewChild } from '@angular/core';
import { ToolbarModel, ToolbarStylingModel, FabModel, CfComponentTemplateService } from 'cedrus-fusion';

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
				collapsible: { show: false }
			})
		},
		{
			toolbar: new ToolbarModel({ 
				info: { show: false }, 
				content: { title: 'Customer 2' }, 
				close: { show: false }, 
				collapsible: { show: false }
			})
		},
		{
			toolbar: new ToolbarModel({ 
				info: { show: false }, 
				content: { title: 'Customer 3' }, 
				close: { show: false }, 
				collapsible: { show: false }
			})
		},
	];

	toolbarsActionsStyling = new ToolbarStylingModel({
		container: { class: 'cf-blue-theme toolbar-instance' },
		toolbar: { class: 'mat-primary' },
		content: { class: 'my-toolbar-actions' }
	});

	fabActions = new FabModel({
    stayOpened: true,
    showButtons: true,
    direction: 'left',
    actionButtons: [{ icon: {name: "close"}}, { icon: {name: "edit" }}, { icon: {name: "info"}}]
  });

	showDialog() {
		let dialogOptions = {
			title: this.currentCustomer,
			okButton: true,
			width: '50%',
			height: '20%',
			dialogType: this.actionType
		};

		this.cfComponentTemplateService.showInDialog({
			template: this.customerDialog,
			dialogOptions: dialogOptions
		});
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