import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FileUploaderModel } from 'cedrus-fusion';
import { CfFileUploaderService } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-file-uploader-2',
	templateUrl: './demo.file-uploader-2.html',
 	styleUrls: ['./demo.file-uploader-2.scss']
})

export class CfDemoFileUploader2 {
  // @ViewChild('myUploader') myUploader: CfFileUploaderComponent;

  constructor(public cfFileUploaderService: CfFileUploaderService) { }

  myUploaderOptions = new FileUploaderModel({
    main: {
      "url": "http://localhost:3001/upload",
    },
    "showDropZone": false,
    "showFileActions": false,
    "showFilesActions": false
  });

  loadFiles() {
    // this.cfFileUploaderService.openLoadWindow(this.myUploader);
  }

  sendFiles() {
    // this.cfFileUploaderService.sendFiles(this.myUploader);
  }

  clearList() {
    // this.cfFileUploaderService.clearAll(this.myUploader);
  }

  files = [];

  log(e){
    console.log('e', e);
    if(e.status === 200) this.files.push(e.file.name);
  }
}