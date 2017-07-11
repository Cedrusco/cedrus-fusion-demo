import { Component, OnDestroy, Input, ViewContainerRef, ViewChild,
  ViewChildren, QueryList, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { ExampleLoaderService } from '../../services/index';

@Component({
    moduleId: module.id,
    selector: 'cd-demo-loader',
    styleUrls: ['./demo-loader.component.scss'],
    templateUrl: './demo-loader.component.html'
})
export class DemoLoaderComponent implements OnDestroy {
    getSubscription: Subscription;

    data: any;
    current = null;
    currentName = '';
    currentFilename = '';
    currentSource: any = { examples: [],
                    documentation: '',
                    styles: ''
                  };
    currentDescription = '';

    basicDemo:any;
    basicSource:any;

    templateDemo:any;
    templateSource:any;
    templateDescription = '';
    templateIndex:number = -1;
    foundTemplate = false;

    currentComponent = null;
    overviewComponent = null;
    templateComponent = null;

    showHide: boolean[] = [];
    initialized = false;
    initializedT = false;
    @ViewChildren('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: QueryList<ViewContainerRef>;
    @ViewChildren ('dynamicComponentContainerT', { read: ViewContainerRef }) dynamicComponentContainerT: QueryList<ViewContainerRef>;

    @Input() set componentData(data: {componentName: string, description: string, fileName: string, 
                              demos:[{component: any, title:string, inputs: any }]}) {
      if (!data) {
        return;
      }
       this.data = data;

      this.getSubscription = this.exampleLoaderService.getSource('component', this.data.fileName,data.demos.length, data["files"])
        .subscribe((source: any) => {
          console.log("Source is ",source);
          this.foundTemplate = false;
          this.initialized = false;
          this.initializedT = false;
          this.currentDescription = this.data.description;
          this.currentFilename = this.data.fileName;
          this.currentName = this.data.componentName.substring(0,this.data.componentName.length-9);
          this.currentSource = source;
          this.showHide = [];
          for(var i=0; i<source["examples"].length;i++)
            this.showHide.push(false);
        });
    }

    clickPlunkerButton(ind): void {
      var form;
      if(ind=='template')
        form = this.exampleLoaderService.constructPlunkerForm(this.templateSource);
      else if(ind=='basic')
        form = this.exampleLoaderService.constructPlunkerForm(this.basicSource);
      else
        form = this.exampleLoaderService.constructPlunkerForm(this.currentSource["examples"][ind]);
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);
    }

    constructor(
      private resolver: ComponentFactoryResolver,
      private exampleLoaderService: ExampleLoaderService
    ) { }

    ngOnDestroy() {
      this.getSubscription.unsubscribe();
    }

    ngAfterViewInit() {
      this.dynamicComponentContainerT.changes.subscribe(changes => {
        if(this.dynamicComponentContainerT.toArray().length && this.initializedT==false) {
           this.initializedT = true;
            if (this.templateComponent) {
              this.templateComponent.destroy();
            }
                  setTimeout(_ =>
                    this.createComponentTemplate()
                  );
              }
      });
      this.dynamicComponentContainer.changes.subscribe(changes => {
        if(this.dynamicComponentContainer.toArray().length && this.initialized==false) {
           this.initialized = true;
            if (this.currentComponent) {
              this.currentComponent.destroy();
            }
            if (this.overviewComponent) {
              this.overviewComponent.destroy();
            }
            if (this.templateComponent) {
              this.templateComponent.destroy();
            }
                  setTimeout(_ =>
                    this.createComponent()
                  );
              }
      });
    }

    createComponent(){
      this.basicDemo = this.data.demos[0];
        const inputProviders = Object.keys(this.basicDemo.inputs).map((inputName) => {return {provide: inputName, useValue: this.basicDemo.inputs[inputName]};});
        const resolvedInputs = ReflectiveInjector.resolve(inputProviders);

        const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.toArray()[0].parentInjector);

        const factory = this.resolver.resolveComponentFactory(this.basicDemo.component);

        const component = factory.create(injector);

        this.dynamicComponentContainer.toArray()[0].insert(component.hostView);
        
        this.overviewComponent = component;
        console.log("Called once");
        this.data.demos.splice(0,1);
        this.basicSource = this.currentSource.examples[0];
        this.currentSource.examples.splice(0,1);

        for(var ind=0;ind<this.data.demos.length;ind++)
        {
          const inputProviders = Object.keys(this.data.demos[ind].inputs).map((inputName) => {return {provide: inputName, useValue: this.data.demos[ind].inputs[inputName]};});
          const resolvedInputs = ReflectiveInjector.resolve(inputProviders);

          const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.toArray()[ind+2].parentInjector);

          const factory = this.resolver.resolveComponentFactory(this.data.demos[ind].component);

          const component = factory.create(injector);

          this.dynamicComponentContainer.toArray()[ind+2].insert(component.hostView);
          
          this.currentComponent = component;
        }
    }

    createComponentTemplate(){
        this.foundTemplate = false;
        for(var ind=0;ind<this.data.demos.length;ind++)
        {
          if(this.data.demos[ind].title.indexOf("Template")>0)
          {
            this.templateDemo = this.data.demos[ind];
            this.templateIndex = ind;
            this.templateDescription = this.templateDemo.description;

            const inputProviders = Object.keys(this.templateDemo.inputs).map((inputName) => {return {provide: inputName, useValue: this.templateDemo.inputs[inputName]};});
            const resolvedInputs = ReflectiveInjector.resolve(inputProviders);

            const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainerT.toArray()[0].parentInjector);

            const factory = this.resolver.resolveComponentFactory(this.templateDemo.component);

            const component = factory.create(injector);

            this.dynamicComponentContainerT.toArray()[0].insert(component.hostView);
            
            this.templateComponent = component;
            this.data.demos.splice(ind,1);
            this.templateSource = this.currentSource.examples[ind];
            this.currentSource.examples.splice(ind,1);
            this.foundTemplate = true;
            break;
          }
        }
    }

}
