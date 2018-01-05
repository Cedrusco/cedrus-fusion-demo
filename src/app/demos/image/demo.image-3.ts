import { Component } from '@angular/core';

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
		options: [
			{value: 'bottom', label: 'Bottom'},
			{value: 'top', label: 'Top'},
      {value: 'right', label: 'Right'},
			{value: 'left', label: 'Left'}
		],
    selected: 'bottom',
		optionsSource: 'fromModel'
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
		options: [
			{value: this.fixedStyling, label: 'Fixed Size'},
			{value: this.responsiveStyling, label: 'Responsive Size'}
		],
		selected: this.responsiveStyling,
    optionsSource: 'fromModel'
	});
}
