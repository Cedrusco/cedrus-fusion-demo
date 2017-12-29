import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GalleryModel } from 'cedrus-fusion';
import { GalleryStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-gallery-1',
	templateUrl: './demo.gallery-1.html',
 	styleUrls: ['./demo.gallery-1.scss']
})

export class CfDemoGallery1 {
	myGallery = new GalleryModel({
		options: {
			width: "100%",
    	imagePercent: 85,
      imageArrowsAutoHide: false,
      thumbnailsPercent: 15,
      thumbnailsColumns:5,
      thumbnailMargin: 7,
      thumbnailsMargin: 7,
      thumbnailsArrowsAutoHide: true,
      previewFullscreen: false
		},
		images: [
			{
	      small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-small.jpeg',
	      medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg',
	      big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg',
	      description: 'Autumn Park in the morning'
	    },
	    {
	      small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-small.jpeg',
	      medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg',
	      big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg',
	      description: 'Sunset over the road'
	    },
	    {
	      small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg',
	      medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg',
	      big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg',
	      description: 'Snow in the mountains'
	    },
	    {
	      small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg',
	      medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg',
	      big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg',
	      description: 'A greenhouse near the house'
	    },
	    {
	      small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg',
	      medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg',
	      big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg',
	      description: 'House in gray tones'
	    },
	    {
	      small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/6-small.jpeg',
	      medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/6-medium.jpeg',
	      big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/6-big.jpeg',
	      description: 'Waterfall with a lake in the mountains'
	    },
	    {
	      small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/7-small.jpeg',
	      medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/7-medium.jpeg',
	      big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/7-big.jpeg',
	      description: 'Sea shore'
	    },
	    {
	      small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/8-small.jpeg',
	      medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/8-medium.jpeg',
	      big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/8-big.jpeg',
	      description: 'Starry glow'
	    }
		]
	});
}
