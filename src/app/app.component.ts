import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Code Fusion';

  appIsScrolled: number;

  @HostListener("window:scroll") onWindowScroll() {
  	if (window.document.documentElement.style.top === '') {
  		this.appIsScrolled = window.pageYOffset;
  	}
  }
}
