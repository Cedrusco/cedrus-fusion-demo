import { Component, OnDestroy, Input, ViewContainerRef,
  ViewChildren, QueryList, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';

import { ExampleLoaderService } from '../../services/index';


//NOT USED YET
@Component({
    moduleId: module.id,
    selector: 'cd-demo-card',
    styleUrls: ['./demo-card.component.scss'],
    templateUrl: './demo-card.component.html'
})
export class DemoCardComponent implements OnDestroy {

    overviewComponent = null;

    showHide: boolean=false;
    
    @ViewChildren('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: QueryList<ViewContainerRef>;

    @Input() description = '';
    @Input() data= {};
    @Input() example: any={};


    clickPlunkerButton(): void {
      const form = this.exampleLoaderService.constructPlunkerForm(this.example);
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);
    }

    constructor(
      private resolver: ComponentFactoryResolver,
      private exampleLoaderService: ExampleLoaderService
    ) { }

    ngAfterViewInit() {
      setTimeout(_ =>
        this.createComponent()
      );
    }

    createComponent(){
      if (this.overviewComponent) {
        this.overviewComponent.destroy();
      }
        const inputProviders = Object.keys(this.data["inputs"]).map((inputName) => {return {provide: inputName, useValue: this.data["inputs"][inputName]};});
        const resolvedInputs = ReflectiveInjector.resolve(inputProviders);

        const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.toArray()[0].parentInjector);

        const factory = this.resolver.resolveComponentFactory(this.data["component"]);

        const component = factory.create(injector);

        this.dynamicComponentContainer.toArray()[0].insert(component.hostView);
        
        this.overviewComponent = component;
    }  
    
    ngOnDestroy(): void {
      if (this.overviewComponent) {
        this.overviewComponent.destroy();
      }
  }

}
