import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { CfFileUploaderComponent } from 'cedrus-fusion';
import { FileUploaderModel } from 'cedrus-fusion';
import { FileUploaderStylingModel } from 'cedrus-fusion';
import { ButtonStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-file-uploader-1',
	templateUrl: './demo.file-uploader-1.html',
 	styleUrls: ['./demo.file-uploader-1.scss']
})

export class CfDemoFileUploader1 {
  myUploaderOptions = new FileUploaderModel({
    main: {
      "url": "http://localhost:3001/upload",
    }
  });

  files = [];

  log(e){
    console.log('e', e);
    if(e.status === 200) this.files.push(e.file.name);
  }
}