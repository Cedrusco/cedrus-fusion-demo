import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { DemoLoaderComponent } from './components/index';
import { DocumentationLoaderComponent } from './components/index';
import { Config, Demo, DemoList } from './models/index';
import { ExampleLoaderService } from './services/index';

@NgModule({
    declarations: [
      DemoLoaderComponent,
      DocumentationLoaderComponent
    ],
    exports: [
      DemoLoaderComponent,
      DocumentationLoaderComponent
    ],
    imports: [
      CommonModule,
      HttpModule,
      FormsModule,
      MaterialModule,
    ],
    providers: [
      ExampleLoaderService,
    ]
})
export class CedrusDemoLoaderModule {
  static forRoot() {
    return {
      ngModule: CedrusDemoLoaderModule,
    };
  }
}
