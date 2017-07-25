import { Component} from '@angular/core';
import { NotificationModel, ProductCardModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-list-5',
	templateUrl: './demo.list-5.html',
 	styleUrls: ['./demo.list-5.scss']
})

export class CfDemoList5  {
	
	showEmails = false;
	showOrders = false;
	showSales = false;

	emailCount: NotificationModel = {
		value: 3,
		type: 'text'
	};
	
	orderCount: NotificationModel = {
   	 	value: 10,
    	type: 'text'
	};

	emails = [
		{
			name: 'Joe G Bell',
			date: new Date(),
			summary:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			avatar: 'http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png'
		},
		{
			name: 'Billie J Smith',
			date: new Date(),
			summary:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/fh04.png'
		},
		{
			name: 'Allan Smith',
			date: new Date(),
			summary:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			avatar: 'http://static.tumblr.com/c172fd03bf2bedb77e13107cb22cdcc1/3rxa3xq/asBo7l3wr/tumblr_static_6fbdkgohxjgoc4c8o8kwoso4k.png'
		}
	];
	orders = [
		{"name":"Smart Phones", "orderDate": new Date(), "iconName":"fa-mobile", "description":"iPhone, Samsung, LG", "price":"5000"},
		{"name":"Laptops", "orderDate": new Date(), "iconName":"fa-laptop", "description":"iMac, Toshiba, Lenovo", "price":"11000"},
		{"name":"Tablets", "orderDate": new Date(), "iconName":"fa-tablet", "description":"iPad, Samsung, Lenovo", "price":"7000"},
		{"name":"Home Appliances", "orderDate": new Date(), "iconName":"fa-home", "description":"Sharp, Blomberg, Campomatic", "price":"4000"},
		{"name":"Office Products", "orderDate": new Date(), "iconName":"fa-briefcase", "description":"HP, Canon, Hisense", "price":"8000"}
	];
	sales = [
		{
			"name": "Germany",
			"value": 8940000
		},
		{
			"name": "USA",
			"value": 5000000
		},
		{
			"name": "France",
			"value": 7200000
		}
	];

	show (content) {
		switch (content) {
      case 'emails':
				this.showEmails = true;
				this.showOrders = false;
				this.showSales = false;
			break;
      case 'orders':
				this.showEmails = false;
				this.showOrders = true;
				this.showSales = false;
			break;	
      case 'sales':
				this.showEmails = false;
				this.showOrders = false;
				this.showSales = true;
			break;	
		}
	}	

}
