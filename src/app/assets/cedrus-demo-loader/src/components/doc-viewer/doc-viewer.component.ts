import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

declare var hljs: any;

@Component({
    moduleId: module.id,
    selector: 'cd-doc-viewer',
    styleUrls: ['./doc-viewer.component.css'],
    templateUrl: './doc-viewer.component.html'
})
export class DocViewerComponent implements OnInit {
  @ViewChild('code')
  codeElement: ElementRef;

  ngAfterViewInit() {
    hljs.highlightBlock(this.codeElement.nativeElement);
  }
  ngOnInit(): void {
  }

  constructor(private myElement: ElementRef) { 
   }

  @Input()
  docType: string="";

  @Input()
  docContent: string="";

}
