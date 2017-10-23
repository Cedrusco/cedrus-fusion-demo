import { Component, Input, Output, OnChanges, EventEmitter, ViewChild } from '@angular/core';
import { 
	ButtonModel, 
	ButtonStylingModel, 
	SelectModel, 
	TabsModel,
	TabsStylingModel, 
	TabsCardModel, 
	TabsCardStylingModel 
} from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-tabs-3',
	templateUrl: './demo.tabs-3.html',
 	styleUrls: ['./demo.tabs-3.scss']
})

export class CfDemoTabs3 {

	@ViewChild('demoTabs') demoTabs;

	cardNumber = 0;

	myTabs = new TabsModel({
		showCardNumberAsPrefix: false,
		showCardNumberAsIcon: true
	});

	myTabsStyle = new TabsStylingModel({
		container: { class: 'my-tabs-container' }
	});

	myTabsCardStyle = new TabsCardStylingModel({
		container: { class: 'my-tab-container', dynamicClass: '' },
		header: { button: { class: 'my-tab-header mat-primary' } },
		iconIndex: { class: 'my-tab-icon-index' }
	});

	cards = [
		new TabsCardModel({ header: { label: "Small content" }}),
		new TabsCardModel({ header: { label: "Big content" }}),
		new TabsCardModel({ header: { label: "Image component" }}),
	];

	raisedButton = new ButtonStylingModel({button: {class: 'mat-primary mat-raised-button'}});

	tabsHeight = new SelectModel({
		placeholder: 'Selected tabs height:',
		options: [
			{value: 'auto-height', label: 'Auto'},
			{value: 'fixed-height', label: '250px'},
		],
		selected: 'auto-height'
	});
  
  navigate(direction) {
  	switch (direction) {
  		case "next": this.cardNumber < 2 ? ++this.cardNumber : this.cardNumber = 0; break;
  		case "prev": this.cardNumber > 0 ? --this.cardNumber : this.cardNumber = 2; break;
  	}
		this.demoTabs.goToCard(this.demoTabs._cards[this.cardNumber], this.cardNumber);
  }

	setHeight(height) {
		this.myTabsCardStyle.container.dynamicClass = height;
	}

	hiddenCards = [false, true, true];
	showCard(card) {
		this.cardNumber = this.demoTabs.activeCardIndex;
		switch (this.demoTabs.activeCardIndex) {
			case 1: if (this.hiddenCards[1]) this.hiddenCards[1] = false; break;
			case 2: if (this.hiddenCards[2]) this.hiddenCards[2] = false; break;
		}
	}
}
