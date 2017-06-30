import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TreeviewModel, ButtonModel } from 'cedrus-fusion';
import { TreeviewStylingModel } from 'cedrus-fusion';
import { StylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-treeview-2',
	templateUrl: './demo.treeview-2.html',
 	styleUrls: ['./demo.treeview-2.scss']
})

export class CfDemoTreeview2 {

  myTreeview = new TreeviewModel({
    items: [
      {
        _id: '1',
        _name: 'Fruits',
        _expanded: false,
        _children: [
          { 
            _id: '2', 
            _expanded: false,
            _name: 'Pear' 
          },
          { 
            _id: '3', 
            _expanded: false,
            _name: 'Apple' 
          }
        ]
      },
      {
        _id: '4',
        _expanded: false,
        _name: 'Vegetables',
        _children: [
          { 
            _id: '5', 
            _expanded: false,
            _name: 'Carrots' 
          },
          {
            _id: '6',
            _expanded: false,
            _name: 'Beans',
            _children: [
              { 
                _id: '7', 
                _expanded: false,
                _name: 'Kidney Beans' 
              }
            ]
          }
        ]
      }
    ],
    options: {
      idField: '_id',
      displayField: '_name',
      childrenField: '_children',
      isExpandedField: '_expanded',
      selectable: true,
      allowDrag: true,
      animateExpand: true
    }
  });

  myTreeStyles = new TreeviewStylingModel({
    container: {
      class: 'my-tree-view'
    },
    item: new StylingModel({
      class: 'my-tree-item'
    })
  });  

  addToCartButton = new ButtonModel({
    label: "Add to list"
  })

  addToCart(item) {
    if (item._children) {
      item._children.forEach(child => {
        this.addToCart(child);
      });
    } else if (this.selected.includes(item._id) && !this.cart.includes(item._name)) {
      this.cart.push(item._name);
    }
  }

  addItemsToCart() {
    this.myTreeview.items.forEach(item => {
      this.addToCart(item);
    })
  }
  
  cart = [];
  selected = [];

  log(e) {
    this.selected = e;
    this.cart = [];
    this.addItemsToCart();
    console.log(this.cart);
  }
}