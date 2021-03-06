import { Component, OnInit, Input, ElementRef, Pipe, PipeTransform, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@Component({
    moduleId: module.id,
    selector: 'cd-documentation-loader',
    styleUrls: ['./documentation-loader.component.css'],
    templateUrl: './documentation-loader.component.html',
    encapsulation: ViewEncapsulation.Native
})
export class DocumentationLoaderComponent implements OnInit {

  @Input()
  docs: any = {};

  // @Input()
  // stylingModel: any = {};

  // private showComp: number = 0;
  // private show: number = 1;

  ngOnInit(): void {
  }

  constructor(private myElement: ElementRef) { 
   }


}
