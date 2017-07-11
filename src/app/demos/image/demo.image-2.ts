import { Component } from '@angular/core';

import { ImageModel } from 'cedrus-fusion';
import { ImageStylingModel } from 'cedrus-fusion';

@Component({
  moduleId: module.id,
  selector: 'cf-demo-image-2',
  templateUrl: './demo.image-2.html',
  styleUrls: ['./demo.image-2.scss']
})
export class CfDemoImage2 {

  //Property
  imageProperty = new ImageModel({
    url: 'https://s-media-cache-ak0.pinimg.com/736x/c3/98/4a/c3984aba959042c80bd4134c48b7fddd.jpg',
    label: 'New York City',
    labelPosition: 'bottom',
  });

  // Styling
  imageStyling = new ImageStylingModel ({
    image: {
      class: "myImage"
    },
    label: {
      class: "imageLabel"
    }
  });
}
