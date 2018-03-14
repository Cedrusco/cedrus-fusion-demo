import { Component } from '@angular/core';

import { CfIconComponent } from 'cedrus-fusion';
import { IconModel } from 'cedrus-fusion';
import { IconStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-icon-6',
	templateUrl: './demo.icon-6.html',
 	styleUrls: ['./demo.icon-6.scss']
})

export class CfDemoIcon6 {

	tooltip = {
		message:'Update Values',
		position:'right'
	}

	stocks = [
		{ previousValue : .445 , currentValue : 1.445 , company: "apple" },
		{ previousValue : 1.32 , currentValue : -0.445 , company: "google" },
		{ previousValue : 3.56 , currentValue : 5.9 , company: "microsoft"}
	]

	iconNameFunc (index) {
		var stock = this.stocks[index];
		if (stock.currentValue > stock.previousValue) return 'arrow_drop_up';
			else return 'arrow_drop_down';
	}

	updateValue() {
		for (let stock of this.stocks) {
			var random = Math.floor((Math.random() * 2) + 1);
			var newVal;
			if (stock.previousValue <0) {
      	newVal = stock.previousValue - random;
      }
      else {
        newVal = stock.previousValue + random;
			}
			stock.previousValue = stock.currentValue;
			stock.currentValue = parseFloat(newVal.toFixed(2)); 
		}
	}
	
	iconStyling = new IconStylingModel ({
		icon : {
			dynamicClass: {
				"up":"this.properties.name == 'arrow_drop_up'",
				"down":"this.properties.name == 'arrow_drop_down'"
			}
		}
	})

	refreshIconStyling = new IconStylingModel ({
		icon:{class:'refreshBtn'}
	})
}
