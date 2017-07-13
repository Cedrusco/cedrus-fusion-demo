import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';

//import {CfBasicModule} from 'cedrus-fusion';
import {CfModule} from 'cedrus-fusion';

import {Demo} from './demo';

@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpModule,
    CfModule
  ],

  declarations: [Demo],
  bootstrap: [Demo],
  providers: []
})
export class PlunkerAppModule {}

platformBrowserDynamic().bootstrapModule(PlunkerAppModule);