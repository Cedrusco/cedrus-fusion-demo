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
    	imagePercent: 20,
      imageArrowsAutoHide: false,
      thumbnailsPercent: 15,
      thumbnailsColumns:5,
      thumbnailMargin: 7,
      thumbnailsMargin: 7,
      thumbnailsArrowsAutoHide: true,
      previewFullscreen: false
		}
	});
}
