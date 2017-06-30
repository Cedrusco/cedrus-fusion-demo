import { Component, Input, Output, OnInit, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { ButtonModel } from 'cedrus-fusion';
import { ButtonStylingModel } from 'cedrus-fusion';
import { TabsModel, CfTabsComponent } from 'cedrus-fusion';
import { TabsStylingModel } from 'cedrus-fusion';
import { TabsCardModel, ItemStylingModel } from 'cedrus-fusion';
import { TabsCardStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-tabs-4',
	templateUrl: './demo.tabs-4.html',
 	styleUrls: ['./demo.tabs-4.scss']
})

export class CfDemoTabs4 implements OnInit {

	 @ViewChild(CfTabsComponent) tabRef: CfTabsComponent;

	myTabs2 = new TabsModel({
		showCardNumberAsPrefix: false,
	});

	skipToJS = function() {
		if (this.tabRef) {
			this.tabRef.goToCard(this.tabRef.tabsCards.toArray()[2], 2)
		}
	};

	hammer =  {
		name: "Hammer",
		price: 15,
		image: "https://www.montessoriservices.com/media/catalog/product/cache/1/thumbnail/550x/9df78eab33525d08d6e5fb8d27136e95/v/5/v508_hammer.jpg"
	};

	screwdriver =  {
		name: "Screwdriver",
		price: 5,
		image: "http://www.homedepot.com/catalog/productImages/1000/f8/f86a3adc-32df-4287-8d07-b7b2a402f64b_1000.jpg"
	};

	drill =  {
		name: "Drill",
		price: 50,
		image: "http://www.homedepot.com/catalog/productImages/1000/b1/b11fb749-bdd8-4249-94c1-12bea4917a40_1000.jpg"
	};

	orders = [
		{ 
			card :new TabsCardModel({ header: { label: "Order 01" }}),
			status: "Processing",
			products: [
				{
					item: this.hammer,
					quantity: 3,
				},
				{
					item: this.screwdriver,
					quantity: 2
				}
			]
		},
		{ 
			card :new TabsCardModel({ header: { label: "Order 02" }}),
			status: "Payment Declined",
			products: [
				{
					item: this.drill,
					quantity: 5
				}
			]
		},
		{ 
			card :new TabsCardModel({ header: { label: "Order 03" }}),
			status: "Shipped",
			products: [
				{
					item: this.drill,
					quantity: 1
				},
				{
					item: this.screwdriver,
					quantity: 1
				},
				{
					item: this.hammer,
					quantity: 1
				}
			]
		}
	];

	total(products) {
		return products.reduce((total, product) => {
			return total + product.item.price * product.quantity;
		}, 0)
	}

	itemStyling: ItemStylingModel[] = [
		new ItemStylingModel({
			item:{
				class:"normalItem"
			},
			selectedItem :{
				class:"selectedItem"
			}}),
			new ItemStylingModel({
			item:{
				class:"normalItemOdd"
			},
			selectedItem :{
				class:"selectedItem"
			}}),
	];

	ngOnInit() {
	}
}
