import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

//IMPORTS
//import { CfBasicModule } from 'cedrus-fusion';
//import { CfLayoutModule } from 'cedrus-fusion';
//import { CfFormModule } from 'cedrus-fusion';

import {Demo} from './demo';

@NgModule({
  exports: [
    //EXPORTS
    // CfBasicModule,
    // CfLayoutModule,
    // CfFormModule
  ]
})
export class PlunkerCfModule {}

@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpModule,
    HttpClientModule,
    PlunkerCfModule
  ],

  declarations: [Demo],
  bootstrap: [Demo],
  providers: []
})
export class PlunkerAppModule {}

platformBrowserDynamic().bootstrapModule(PlunkerAppModule);