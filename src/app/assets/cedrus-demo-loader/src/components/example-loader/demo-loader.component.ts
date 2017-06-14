import { Component, OnDestroy, Input, ViewContainerRef,
  ViewChildren, QueryList, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { ExampleLoaderService } from '../../services/index';

@Component({
    moduleId: module.id,
    selector: 'cd-demo-loader',
    styleUrls: ['./demo-loader.component.css'],
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

    currentComponent = null;
    overviewComponent = null;

    showHide: boolean[] = [];
    initialized = false;
    @ViewChildren('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: QueryList<ViewContainerRef>;

    @Input() set componentData(data: {componentName: string, description: string, fileName: string, demos:[{component: any, title:string, inputs: any }]}) {
      if (!data) {
        return;
      }
       this.data = data;

      this.getSubscription = this.exampleLoaderService.getSource('component', this.data.fileName,data.demos.length)
        .subscribe((source: any) => {
          this.initialized = false;
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
      const form = this.exampleLoaderService.constructPlunkerForm(this.currentSource["examples"][ind]);
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
      this.dynamicComponentContainer.changes.subscribe(changes => {
        if(this.dynamicComponentContainer.toArray().length && this.initialized==false) {
          
           this.initialized = true;
            if (this.currentComponent) {
              this.currentComponent.destroy();
            }
            if (this.overviewComponent) {
              this.overviewComponent.destroy();
            }
                  setTimeout(_ =>
                    this.createComponent()
                  );
              }
      });
    }

    createComponent(){

        const inputProviders = Object.keys(this.data.demos[0].inputs).map((inputName) => {return {provide: inputName, useValue: this.data.demos[0].inputs[inputName]};});
        const resolvedInputs = ReflectiveInjector.resolve(inputProviders);

        const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.toArray()[0].parentInjector);

        const factory = this.resolver.resolveComponentFactory(this.data.demos[0].component);

        const component = factory.create(injector);

        this.dynamicComponentContainer.toArray()[0].insert(component.hostView);
        
        this.overviewComponent = component;

        for(var ind=0;ind<this.data.demos.length;ind++)
        {
          const inputProviders = Object.keys(this.data.demos[ind].inputs).map((inputName) => {return {provide: inputName, useValue: this.data.demos[ind].inputs[inputName]};});
          const resolvedInputs = ReflectiveInjector.resolve(inputProviders);

          const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.toArray()[ind+1].parentInjector);

          const factory = this.resolver.resolveComponentFactory(this.data.demos[ind].component);

          const component = factory.create(injector);

          this.dynamicComponentContainer.toArray()[ind+1].insert(component.hostView);
          
          this.currentComponent = component;
        }
    }

}
