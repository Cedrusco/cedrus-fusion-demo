import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RatingModel, ButtonModel, ButtonStylingModel, InputModel } from 'cedrus-fusion';
import { StylingModel } from 'cedrus-fusion';
import { RatingStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-rating-3',
	templateUrl: './demo.rating-3.html',
 	styleUrls: ['./demo.rating-3.scss']
})

export class CfDemoRating3 {
	disabled = false;

	rating = new RatingModel({
		label: 'Rate us',
		icon: 'fa-thumbs-up',
		value: 1,
		max: 5,
		countFromEnd: true,
		iconsVertical: true,
		disabled: this.disabled
	});

	submitButton = new ButtonModel({
		label: "Submit"
	});

	input = new InputModel ({
		type : "text",
		placeholder: "You can tell us",
		dividerColor : "midnightblue",
		maxlength: 1000
	});

	myRatingStyles = new RatingStylingModel({
		container: new StylingModel({
			class: 'my-third-rating-container',
		}),
		label: new StylingModel({
			class: 'my-third-rating-label'
		}),
		item: new StylingModel({
			class: 'my-third-rating-item-icon',
			dynamicClass: "'dynamic-items-class'"
		}),
		iconSize: '30px',
		filledColor: 'midnightblue',
		emptyColor: 'lightsteelblue',
	});

	submitButtonStyling = new ButtonStylingModel({
		button:{
			class:"submit-button"
		}
	});
}
