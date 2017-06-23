import { Component, Input, Output, OnInit, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { ButtonModel } from 'cedrus-fusion';
import { ButtonStylingModel } from 'cedrus-fusion';
import { TabsModel, CfTabsComponent } from 'cedrus-fusion';
import { TabsStylingModel } from 'cedrus-fusion';
import { TabsCardModel } from 'cedrus-fusion';
import { TabsCardStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-tabs-2',
	templateUrl: './demo.tabs-2.html',
 	styleUrls: ['./demo.tabs-2.scss']
})

export class CfDemoTabs2 implements OnInit {

	 @ViewChild(CfTabsComponent) tabRef: CfTabsComponent;

	myTabs2 = new TabsModel({
		showCardNumberAsPrefix: false,
	});

	skipButton = new ButtonModel({
		label: 'Skip the sauce'
	});

	skipToJS = function() {
		if (this.tabRef) {
			this.tabRef.goToCard(this.tabRef.tabsCards.toArray()[2], 2)
		}
	};

	cards = [
		{ 
			card :new TabsCardModel({ header: { label: "The Pasta" }}),
			text: "Perfect pasta preparation is very important. Do not under any circumstances put oil in your pasta water. Rather, salt it heavily to add some flavor to the pasta. What kind of pasta you should use depends upon the kind of sauce. In general, thinner sauces should be paired with thinner pastas and thicker or chunkier sauces should be paired with larger pasta shapes. If you have store-bought sauce, you may want to skip the next section.",
			button : this.skipButton,
			func: () => {
				this.skipToJS();
			}
		},
		{ 
			card :new TabsCardModel({ header: { label: "The Sauce" }}),
			text: "While having a good flavor and consistency to your pasta is important, the sauce is the most important part of your recipe. When possible, make your own sauce from fresh ingredients--for example, try to buy tomatoes and puree them yourself rather than use canned tomato paste. When you taste your pasta, you'll know the effort was worth it!",
			button : null,
			func: null
		},
		{ 
			card :new TabsCardModel({ header: { label: "Finishing Touches" }}),
			text: "To round out your meal, find a nice Italian wine to complement your pasta. In keeping with the Italian theme, perhaps you should buy or make some gelato or tiramisu for dessert!",
			button : null,
			func: null
		}
	];

	ngOnInit() {
	}
}
