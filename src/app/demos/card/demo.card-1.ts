import { Component, OnInit, Input } from '@angular/core';
import { IconModel } from 'cedrus-fusion';
import { LayoutModel } from 'cedrus-fusion';
import { NewsCardModel } from 'cedrus-fusion';
import { ProductCardModel } from 'cedrus-fusion';
import { StandardCardModel } from 'cedrus-fusion';
import { Themes } from 'cedrus-fusion';


@Component({
  moduleId: module.id,
  selector: 'cf-demo-card-1',
  templateUrl: './demo.card-1.html',
  styleUrls: ['./demo.card-1.scss']
})
export class CfDemoCard1 implements OnInit {

  title = "Card Demo";
  @Input()
  themeName = "";

  clickFunc(name: string): void {
      alert("You pressed "+name);
  }

  newsCard = new NewsCardModel({
      description: "Something important happened in somewhere important",
      title:"Something Happened!",
      subtitle:"subtitle",
      author:"Someone..",
      date:"2017-02-28",
      image: "./assets/images/news.jpg",
      url:"http://www.google.com",
      color: {
          foreground: "black",
          background: "white"
      },
      size: {
          width:"250px"
      },
      align:"right"
  });

  productCard1 = new ProductCardModel({
      description: "Men's Basketball Shoes",
      name:"NIKE HYPERCHASE",
      price: "125$",
      image: "./assets/images/nike.jpg",
      image_type:"normal",
      color: {
          foreground: "black",
          background: "white"
      },
      size: {
          width:"200px"
      },
      align:"right",
      onBuy: this.clickFunc,
      onAdd: this.clickFunc
  });

  productCard2 = new ProductCardModel({
      description: "Awesome Laptop",
      name:"Laptop",
      price: "999$",
      image: "./assets/images/laptop.png",
      image_type:"title",
      color: {
          foreground: "black",
          background: "white"
      },
      size: {
          width:"200px"
      },
      align:"right",
      onBuy: this.clickFunc,
      onAdd: this.clickFunc
  });

    standardCard1 = new StandardCardModel({
      subtitle: "Software Engineer",
      title:"Sensei",
      description:"Tel: 70-413522",
      image: "./assets/images/sensei.png",
      image_type:"avatar",
      color: {
          foreground: "black",
          background: "#dcf1f5"
      },
      size: {
          width:"200px"
      },
      align:"right",
      onSelect: null,
      onDelete: null
  });
    standardCard2 = new StandardCardModel({
      subtitle: "Software Engineer",
      title:"Sensei",
      description:"Tel: 70-413522",
      image: "./assets/images/sensei.png",
      image_type:"title",
      color: {
          foreground: "black",
          background: "#f3f7d6"
      },
      size: {
          width:"200px"
      },
      align:"right",
      onEdit: this.clickFunc,
      onDelete: this.clickFunc
  });

  constructor() { }

  ngOnInit() {
  }

}
