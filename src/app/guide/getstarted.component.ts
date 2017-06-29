import { Component } from '@angular/core';

@Component({
  selector: 'get-started',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.css']
})
export class GetStartedComponent {

  normal = "yes";
  business = "no";

  click(value) {
    if(value == "normal") {
      this.normal = "yes";
      this.business = "no";
    }
    else {
      this.normal = "no";
      this.business = "yes";
    }
    console.log(value);
  }
}