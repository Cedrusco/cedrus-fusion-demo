import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'cd-documentation-loader',
    styleUrls: ['./documentation-loader.component.css'],
    templateUrl: './documentation-loader.component.html'
})
export class DocumentationLoaderComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private myElement: ElementRef) { 
   }

  @Input()
  docs: any;

}
