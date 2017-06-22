import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RatingModel, ButtonModel, ButtonStylingModel } from 'cedrus-fusion';
import { StylingModel } from 'cedrus-fusion';
import { RatingStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-rating-2',
	templateUrl: './demo.rating-2.html',
 	styleUrls: ['./demo.rating-2.scss']
})

export class CfDemoRating2 {
	disabled = false;

	heartRating = new RatingModel({
		label: 'How was our service?',
		icon: 'fa-heart',
		value: 1,
		max: 7,
		countFromEnd: false,
		iconsVertical: false,
		disabled: this.disabled
	});

	myButton = new ButtonModel({
		label: "Perfect!",
		disable: this.disabled
	});

	myRefuseButton = new ButtonModel({
		label: "Maybe later"
	});

	setPerfect() {
		this.heartRating.value = 7;
	}

	refuse() {
		this.disabled = true;
		this.heartRating.disabled = true;
	}

	perfectButtonStyling = new ButtonStylingModel({
		button:{
			class:"myButton"
		}
	});

	refuseButtonStyling = new ButtonStylingModel({
		button:{
			class:"myRefuseButton"
		}
	});

	myRatingStyles = new RatingStylingModel({
		container: new StylingModel({
			class: 'my-second-rating-container',
		}),
		label: new StylingModel({
			class: 'my-second-rating-label'
		}),
		item: new StylingModel({
			class: 'my-second-rating-item-icon',
			dynamicClass: "'dynamic-items-class'"
		}),
		iconSize: '30px',
		filledColor: 'crimson',
		emptyColor: '#f6a2b3',
	});
}
