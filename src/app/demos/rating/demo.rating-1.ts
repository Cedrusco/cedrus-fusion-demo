import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RatingModel } from 'cedrus-fusion';
import { StylingModel } from 'cedrus-fusion';
import { RatingStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-rating-1',
	templateUrl: './demo.rating-1.html',
 	styleUrls: ['./demo.rating-1.scss']
})

export class CfDemoRating1 {
	disabled = false;

	myRating = new RatingModel({
		label: 'Rating label',
		icon: 'stars',
		value: 1,
		max: 5,
		countFromEnd: false,
		iconsVertical: false,
		disable: this.disabled
	});

	myRating2 = new RatingModel({
		label: 'Rating label',
		icon: 'stars',
		value: 1,
		max: 5,
		countFromEnd: true,
		iconsVertical: false,
		disable: this.disabled
	});

	myRating3 = new RatingModel({
		label: 'Rating label',
		icon: 'stars',
		value: 1,
		max: 5,
		countFromEnd: false,
		iconsVertical: true,
		disable: this.disabled
	});

	myRating4 = new RatingModel({
		label: 'Rating label',
		icon: 'stars',
		value: 1,
		max: 5,
		countFromEnd: true,
		iconsVertical: true,
		disable: this.disabled
	});

	myRatingStyles = new RatingStylingModel({
		container: new StylingModel({
			class: 'my-rating-container',
		}),
		label: new StylingModel({
			class: 'my-rating-label'
		}),
		item: new StylingModel({
			class: 'my-rating-item-icon',
			dynamicClass: "'dynamic-items-class'"
		}),
		iconSize: '30px',
		filledColor: 'lightseagreen',
		emptyColor: 'darkseagreen',
	});

	changeMyRatingsDisabled() {
		this.myRating.disable = !this.myRating.disable;
		this.myRating2.disable = !this.myRating2.disable;
		this.myRating3.disable = !this.myRating3.disable;
		this.myRating4.disable = !this.myRating4.disable;
	}

	changeMyRatingsValues() {
		this.myRating.value = 3;
		this.myRating2.value = 3;
		this.myRating3.value = 3;
		this.myRating4.value = 3;
	}

}
