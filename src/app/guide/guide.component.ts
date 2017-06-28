import { Component } from '@angular/core';

@Component({
  selector: 'guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent {

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