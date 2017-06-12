import { Component, OnInit, Input } from '@angular/core';
import { Themes } from 'cedrus-fusion';
import { Customer } from 'cedrus-fusion';
import { CustomerListModel } from 'cedrus-fusion';

@Component({
	moduleId: module.id,
	selector: 'cf-demo-customer-list-1',
	templateUrl: './demo.customer-list-1.html',
	styleUrls: ['./demo.customer-list-1.scss']
})

export class CfDemoCustomerList1 implements OnInit {
	/**
	 * Represents a customized theme for some components in the application
	 */
	themeName: string = '';

  customers = new CustomerListModel({
		items: [{
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
		}]
	});

	properties: any = {
		templates: {
			customerDetailsTmpl: {
				title: 'Customers List',
				templateType: 'dialog',
				width: '300px',
				height: '200px',
				disableClose: false,
				mode: 'over',
				align: 'start',
				dialogType: 'info'//'warning', 'info', 'error'
			}
		}
	};

	customerDetailsTmplType = '';
	customerDetailsTmpls = [{
		"value": "listInComponent",
		"title": "Customer List in Entire Component Area"
	}, {
		"value": "detailsInComponent",
		"title": "Customer Details in Entire Component Area"
	}, {
		"value": "dialog",
		"title": "Customer Details in Dialog"
	}, {
		"value": "sidenavLeft",
		"title": "Customer Details in Sidenav Left"
	}, {
		"value": "sidenavRight",
		"title": "Customer Details in Sidenav Right"
	}, {
		"value": "sidenavOver",
		"title": "Customer Details in Sidenav Over"
	}, {
		"value": "sidenavPush",
		"title": "Customer Details in Sidenav Push"
	}, {
		"value": "sidenavSide",
		"title": "Customer Details in Sidenav Side"
	}];

	constructor() {}

	ngOnInit() {}

	setTemplate() {
		switch (this.customerDetailsTmplType) {
			case 'listInComponent':
				this.properties.templates.customerDetailsTmpl.templateType = 'listInComponent';
        break;
      case 'detailsInComponent':
				this.properties.templates.customerDetailsTmpl.templateType = 'detailsInComponent';
        break;
      case 'dialog':
				this.properties.templates.customerDetailsTmpl.templateType = 'dialog';
        break;
      case 'sidenavLeft':
				this.properties.templates.customerDetailsTmpl.templateType = 'sidenav';
        this.properties.templates.customerDetailsTmpl.align = 'start';
        break;
			case 'sidenavRight':
				this.properties.templates.customerDetailsTmpl.templateType = 'sidenav';
        this.properties.templates.customerDetailsTmpl.align = 'end';
        break;
			case 'sidenavOver':
				this.properties.templates.customerDetailsTmpl.templateType = 'sidenav';
        this.properties.templates.customerDetailsTmpl.mode = 'over';
        break;
			case 'sidenavPush':
				this.properties.templates.customerDetailsTmpl.templateType = 'sidenav';
        this.properties.templates.customerDetailsTmpl.mode = 'push';
        break;
			case 'sidenavSide':
				this.properties.templates.customerDetailsTmpl.templateType = 'sidenav';
        this.properties.templates.customerDetailsTmpl.mode = 'side';
        break;
    }
	}
}
