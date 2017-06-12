import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { CfFileUploaderComponent } from 'cedrus-fusion';
import { CfFileUploaderService } from 'cedrus-fusion';
import { FileUploaderModel } from 'cedrus-fusion';
import { FileUploaderStylingModel } from 'cedrus-fusion';
import { ButtonStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-file-uploader-1',
	templateUrl: './demo.file-uploader-1.html',
 	styleUrls: ['./demo.file-uploader-1.scss']
})

export class CfDemoFileUploader1 implements OnInit {
  @ViewChild('myUploader') myUploader: CfFileUploaderComponent;

  constructor(public cfFileUploaderService: CfFileUploaderService) { }

  myUploaderOptions = new FileUploaderModel({
    main: {
      "url": "/upload",
      "removeBySuccess": true,
      "uniqueFiles": true
    },
    "dropZone": true,
    "dropZoneLabel": "Drop files here or select:",
    "showActions": true,
    "showItemActions": true
  });

  myUploaderStyling = new FileUploaderStylingModel({
    dropZone: {
      class: 'dafgadga'
    },
    uploadButton: new ButtonStylingModel({
      button: {
        class: 'mat-primary mat-raised-button'
      }
    }),
    removeButton: new ButtonStylingModel({
      button: {
        class: 'mat-primary mat-raised-button'
      }
    }),
    uploadAllButton: new ButtonStylingModel({
      button: {
        class: 'mat-primary mat-raised-button'
      }
    }),
    removeAllButton: new ButtonStylingModel({
      button: {
        class: 'mat-primary mat-raised-button'
      }
    })
  });

  loadFiles(){
    this.cfFileUploaderService.openLoadWindow(this.myUploader);
  }

  sendFiles(){
    this.cfFileUploaderService.sendFiles(this.myUploader);
  }

  clearList(){
    this.cfFileUploaderService.clearAll(this.myUploader);
  }

  files = [];

  log(e){
    console.log('e', e);
    if(e.status === 200) this.files.push(e.file.name);
  }

  ngOnInit() {
    console.log('demo init', this);
  }
}