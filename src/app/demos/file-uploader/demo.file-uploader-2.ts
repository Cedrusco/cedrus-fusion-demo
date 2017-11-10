import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import {CfFileUploaderComponent } from 'cedrus-fusion';
import { FileUploaderModel } from 'cedrus-fusion';
import { CfFileUploaderService } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-file-uploader-2',
	templateUrl: './demo.file-uploader-2.html',
 	styleUrls: ['./demo.file-uploader-2.scss']
})

export class CfDemoFileUploader2 {
  @ViewChild('myUploader') myUploader: CfFileUploaderComponent;

  constructor(public cfFileUploaderService: CfFileUploaderService) { }

  myUploaderOptions = new FileUploaderModel({
    main: {
      url: "http://Your_real_server_url_adapted_to_receive_files",
    },
    readFiles: true,
    filesNames: [ '.json', '.png' ],
    showDropZone: false,
    showFileActions: false,
    showFilesActions: false
  });

  loadFiles() {
    this.cfFileUploaderService.openLoadWindow(this.myUploader);
  }

  sendFiles() {
    this.cfFileUploaderService.sendFiles(this.myUploader);
  }

  clearList() {
    this.cfFileUploaderService.clearAll(this.myUploader);
  }

  filesAdded = [];

  logAdded(e) {
    console.log('added file', e);
    this.filesAdded.push(e);
  }

  filesUploaded = [];

  logUploaded(e) {
    console.log('uploaded file', e);
    if(e.status === 200) this.filesUploaded.push(e.file.name);
  }
}