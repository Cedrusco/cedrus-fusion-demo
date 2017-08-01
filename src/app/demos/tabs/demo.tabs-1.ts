import { Component, OnInit, ViewChild } from '@angular/core';
import { 
	ButtonModel, 
	ButtonStylingModel, 
	TabsModel, 
	TabsStylingModel, 
	TabsCardModel, 
	TabsCardStylingModel 
} from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-tabs-1',
	templateUrl: './demo.tabs-1.html',
 	styleUrls: ['./demo.tabs-1.scss']
})

export class CfDemoTabs1 implements OnInit {
	@ViewChild('staticCards') staticCards;
	@ViewChild('dynamicCards') dynamicCards;
	
	myTabs = new TabsModel({
		showCardNumberAsIcon: true,
		showCardNumberAsPrefix: false
	});

	myTabs2 = new TabsModel({
		showCardNumberAsPrefix: true,
		showCardNumberAsIcon: false
	});

	myTabsStyles = new TabsStylingModel({
		container: {
			class: "my-custom-tabs"
		}
	});

	cards = [
		new TabsCardModel({ header: { label: "Card" }}),
		new TabsCardModel({ header: { label: "Card" }}),
		new TabsCardModel({ header: { label: "Card" }}),
		new TabsCardModel({ header: { label: "Card" }}),
		new TabsCardModel({ header: { label: "Card" }}),
	];

	myTabsCardStyles = new TabsCardStylingModel({
		container: {
			class: "my-custom-tabs-card"
		},
		header: new ButtonStylingModel({
			button: {
				class: "my-tabs-card-header-button ",
			}
		})
	});

	hiddenCards1 = [false, true, true, true];
	hiddenCards2 = [false, true, true, true, true];
	updateComponent(component) {
		if(component===1){
			switch (this.staticCards.activeCardIndex) {
				case 1: if (this.hiddenCards1[1]) this.hiddenCards1[1] = false; break;
				case 2: if (this.hiddenCards1[2]) this.hiddenCards1[2] = false; break;
				case 3: if (this.hiddenCards1[3]) this.hiddenCards1[3] = false; break;
			}
		}else if(component===2){
			switch (this.dynamicCards.activeCardIndex) {
				case 1: if (this.hiddenCards2[1]) this.hiddenCards2[1] = false; break;
				case 2: if (this.hiddenCards2[2]) this.hiddenCards2[2] = false; break;
				case 3: if (this.hiddenCards2[3]) this.hiddenCards2[3] = false; break;
				case 4: if (this.hiddenCards2[4]) this.hiddenCards2[4] = false; break;
			}
		}
	}

	ngOnInit() {
	}
}
