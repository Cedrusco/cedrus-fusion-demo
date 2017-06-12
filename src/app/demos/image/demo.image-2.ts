import { Component, OnInit, Input } from '@angular/core';

import { ImageModel } from 'cedrus-fusion';
import { ImageStylingModel } from 'cedrus-fusion';

@Component({
  moduleId: module.id,
  selector: 'cf-demo-image-2',
  templateUrl: './demo.image-2.html',
  styleUrls: ['./demo.image-2.scss']
})
export class CfDemoImage2 implements OnInit {
  myImage1 = new ImageModel ({
    url: 'http://cdn.wonderfulengineering.com/wp-content/uploads/2016/01/beach-wallpaper-11.jpg',
    labelPosition: 'right',
  });
  imageStyling1 = new ImageStylingModel ({
    image: {
      class: "image1"
    }
  });

  myImage2 = new ImageModel ({
    label: 'My image text',
    labelPosition: 'top',
    url: 'http://cdn.wonderfulengineering.com/wp-content/uploads/2016/01/beach-wallpaper-11.jpg',
  });
  imageStyling2 = new ImageStylingModel ({
    label: {
      class: "label2"
    },
    image: {
      class: "image2"
    }
  });
  
  ngOnInit() { }

}
