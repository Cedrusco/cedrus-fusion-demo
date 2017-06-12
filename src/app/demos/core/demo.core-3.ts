import { Component, OnInit, Input } from '@angular/core';
import { ButtonModel } from 'cedrus-fusion';
import { CfAnimationService } from 'cedrus-fusion';

@Component({
  moduleId: module.id,
  selector: 'cf-demo-core-3',
  templateUrl: './demo.core-3.html',
  styleUrls: ['./demo.core-3.scss'],
  animations: [
    CfAnimationService.bounceIn(),
    CfAnimationService.bounceOut(),
    CfAnimationService.bounceInLeft(),
    CfAnimationService.bounceInRight(),
    CfAnimationService.bounceOutLeft(),
    CfAnimationService.bounceOutRight(),
    CfAnimationService.fadeIn(),
    CfAnimationService.fadeOut(),
    CfAnimationService.fadeInLeft(),
    CfAnimationService.fadeInRight(),
    CfAnimationService.fadeOutLeft(),
    CfAnimationService.fadeOutRight(),
    CfAnimationService.rotateIn(),
    CfAnimationService.rotateOut(),
    CfAnimationService.rotateInDownLeft(),
    CfAnimationService.rotateInDownRight(),
    CfAnimationService.rotateOutDownLeft(),
    CfAnimationService.rotateOutDownRight(),
    CfAnimationService.slideInLeft(),
    CfAnimationService.slideInRight(),
    CfAnimationService.slideOutLeft(),
    CfAnimationService.slideOutRight(),
    CfAnimationService.zoomIn(),
    CfAnimationService.zoomOut(),
    CfAnimationService.zoomInLeft(),
    CfAnimationService.zoomInRight(),
    CfAnimationService.zoomOutLeft(),
    CfAnimationService.zoomOutRight(),
  ]
})
export class CfDemoCore3 implements OnInit {
  selectedAnimation = "";
  animations = [
    "bounceIn bounceOut",
    "bounceIn bounceOut left",
    "bounceIn bounceOut right",
    "fadeIn fadeOut",
    "fadeIn fadeOut left",
    "fadeIn fadeOut right",
    "rotateIn rotateOut",
    "rotateIn rotateOut down left",
    "rotateIn rotateOut down right",
    "slideIn slideOut left",
    "slideIn slideOut right",
    "zoomIn zoomOut",
    "zoomIn zoomOut left",
    "zoomIn zoomOut right"
  ];

  button1 = new ButtonModel({
   label: "Animate it"
  });

  button2 = new ButtonModel({
   label: "Animation Example"
  });

  constructor() {}

  ngOnInit() {
  }

  currentAnimation = "";

  toggleAnimation(): void {
    if (this.selectedAnimation && !this.currentAnimation) {
      this.currentAnimation = this.selectedAnimation;
    } else if (this.selectedAnimation && this.currentAnimation) {
      this.currentAnimation = "";
    }
	}
}
