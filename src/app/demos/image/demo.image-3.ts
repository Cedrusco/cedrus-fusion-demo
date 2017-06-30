import { Component, OnInit, Input } from '@angular/core';

import { ImageModel, SelectModel } from 'cedrus-fusion';
import { ImageStylingModel } from 'cedrus-fusion';

@Component({
  moduleId: module.id,
  selector: 'cf-demo-image-3',
  templateUrl: './demo.image-3.html',
  styleUrls: ['./demo.image-3.scss']
})
export class CfDemoImage3 {
  position = 'bottom';
  //Property
  imageProperty = new ImageModel({
    url: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/83000/83828/ISS039-E-018538_lrg.jpg',
    label: 'New York City from the ISS'
  });

  myPosition = new SelectModel ({
		placeholder: 'Select caption position: ',
		items: [
			{itemValue: 'bottom', itemLabel: 'Bottom'},
			{itemValue: 'top', itemLabel: 'Top'},
      {itemValue: 'right', itemLabel: 'Right'},
			{itemValue: 'left', itemLabel: 'Left'}
		],
		selected: 'bottom',
		showFilter: false
	});

  // Styling
  responsiveStyling = new ImageStylingModel ({
    image: {
      class: "casualImage"
    },
    label: {
      class: "casualLabel"
    }
  });

  fixedStyling = new ImageStylingModel ({
    image: {
      class: "fancyImage"
    },
    label: {
      class: "casualLabel"
    }
  });

  myStyle = new SelectModel ({
		placeholder: 'Select style: ',
		items: [
			{itemValue: this.fixedStyling, itemLabel: 'Fixed Size'},
			{itemValue: this.responsiveStyling, itemLabel: 'Responsive Size'}
		],
		selected: this.responsiveStyling,
		showFilter: false
	});
}
