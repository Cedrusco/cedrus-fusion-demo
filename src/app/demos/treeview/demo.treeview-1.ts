import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TreeviewModel } from 'cedrus-fusion';
import { TreeviewStylingModel } from 'cedrus-fusion';
import { StylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-treeview-1',
	templateUrl: './demo.treeview-1.html',
 	styleUrls: ['./demo.treeview-1.scss']
})

export class CfDemoTreeview1 {
	header = 'Simple Treeview';

	myTreeview = new TreeviewModel({
    items: [
      {
        _id: '1',
        _name: 'root1',
        _expanded: true,
        _children: [
          { 
            _id: '2', 
            _expanded: false,
            _name: 'child1' 
          },
          { 
            _id: '3', 
            _expanded: false,
            _name: 'child2' 
          }
        ]
      },
      {
        _id: '4',
        _expanded: false,
        _name: 'root2',
        _children: [
          { 
            _id: '5', 
            _expanded: false,
            _name: 'child2.1' 
          },
          {
            _id: '6',
            _expanded: false,
            _name: 'child2.2',
            _children: [
              { 
                _id: '7', 
                _expanded: false,
                _name: 'subsub' 
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
        class: 'cf-default-theme my-tree-view',
        dynamicClass: ''
      },
      item: new StylingModel({
        class: 'my-tree-item',
        dynamicClass: ''
      })
    });  
  
  selected = [];

	log(e) {
    this.selected = e;
  }

  generateId() {
    return Math.floor(Math.random() * 100000)
  }

	addNewItem() {
    var id = '' + this.generateId(),
        node = {
          _id: id,
          _expanded: false,
          _name: 'New node ' + id,
          _children: []
        }

    // this.myTreeview.items.push(node);
    this.myTreeview.items[0]._children.push(node);
    // this.myTreeview.items[0]._name = 'Name changed from Demo';
  }
}