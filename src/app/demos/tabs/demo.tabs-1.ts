import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ButtonModel } from 'cedrus-fusion';
import { ButtonStylingModel } from 'cedrus-fusion';
import { TabsModel } from 'cedrus-fusion';
import { TabsStylingModel } from 'cedrus-fusion';
import { TabsCardModel } from 'cedrus-fusion';
import { TabsCardStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-tabs-1',
	templateUrl: './demo.tabs-1.html',
 	styleUrls: ['./demo.tabs-1.scss']
})

export class CfDemoTabs1 implements OnInit {

	myTabs = new TabsModel({
		showCardNumberAsIcon: true,
	});

	myTabs2 = new TabsModel({
		showCardNumberAsPrefix: true,
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
	})

	ngOnInit() {
	}
}
