import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Config, Docs } from '../../models';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ExampleLoaderService {

  plunkerUrl = 'https://plnkr.co/edit/?p=preview';

  constructor(
    private http: Http,
    // @Inject(Config) private config: Config,
  ) { }

  getSource(type, name, number): Observable<{}> {
    return this.http.get(`/${type}/${name}/${number}`)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw('Server Error'));
  }

  constructPlunkerForm(source: any): HTMLFormElement {
    const form = this._createForm();

    this._appendFormInput(form, 'private', 'true');
    this._appendFormInput(form, 'description', '');

    const { html, sass } = source;
    const {
      indexHtml,
      systemJs,
      mainTs,
      plunkrTs
    } = source.plunkr;

    this._addSourceToForm(form, mainTs, 'main.ts');
    this._addSourceToForm(form, indexHtml, 'index.html');
    this._addSourceToForm(form, html, 'demo.html');
    this._addSourceToForm(form, plunkrTs, 'demo.ts');
    this._addSourceToForm(form, sass, 'demo.css');
    this._addSourceToForm(form, systemJs, 'systemjs.config.js');

    return form;
  }

  _addSourceToForm(form: HTMLFormElement, content: string, filename: string): void {
    this._appendFormInput(form, `files[${filename}]`, content);
  }

  _appendFormInput(form: HTMLFormElement, name: string, value: string): void {
    const input = document.createElement('input');

    input.type  = 'hidden';
    input.name  = name;
    input.value = value;

    form.appendChild(input);
  }

  _createForm(): HTMLFormElement {
    const form  = document.createElement('form');

    form.action = this.plunkerUrl;
    form.method = 'post';
    form.target = '_blank';

    return form;
  }

}
