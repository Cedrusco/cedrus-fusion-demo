"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var cedrus_fusion_1 = require("cedrus-fusion");
var cedrus_fusion_2 = require("cedrus-fusion");
var cedrus_fusion_3 = require("cedrus-fusion");
var cedrus_fusion_4 = require("cedrus-fusion");
var cedrus_fusion_5 = require("cedrus-fusion");
var cedrus_fusion_6 = require("cedrus-fusion");
var cedrus_fusion_7 = require("cedrus-fusion");
var CfDemoToolbar1 = (function () {
    function CfDemoToolbar1() {
        this.myToolbar = new cedrus_fusion_1.ToolbarModel({
            info: {
                show: true
            },
            content: {
                title: 'My Toolbar',
            },
            close: {
                show: true
            },
        });
        this.myStyling3 = new cedrus_fusion_2.ToolbarStylingModel({
            toolbar: {
                class: 'mat-primary'
            }
        });
        this.isExpanded = false;
        this.collapsibleState = '';
        this.myToolbar2 = new cedrus_fusion_1.ToolbarModel({
            info: {
                show: true,
                icon: {
                    name: 'star',
                    type: 'mi',
                    size: '24px'
                }
            },
            content: {
                title: 'Toolbar with List Component'
            },
            actions: {
                show: true,
                menu: new cedrus_fusion_7.MenuModel({
                    triggerIcon: new cedrus_fusion_4.IconModel({ name: "menu" }),
                    menuItems: [
                        {
                            buttonProperty: {
                                label: 'Action item',
                                iconProperty: new cedrus_fusion_4.IconModel({ name: 'account_balance' }),
                                iconPosition: "left",
                            },
                            notification: null,
                            onClick: null
                        },
                        {
                            buttonProperty: {
                                label: 'Action item',
                                iconProperty: new cedrus_fusion_4.IconModel({ name: 'theaters' }),
                                iconPosition: "left",
                            },
                            notification: null,
                            onClick: null
                        },
                        {
                            buttonProperty: {
                                label: 'Action item',
                                iconProperty: new cedrus_fusion_4.IconModel({ name: 'store' }),
                                iconPosition: "left",
                            },
                            notification: null,
                            onClick: null
                        }
                    ]
                })
            },
            close: {
                show: true
            },
            collapsible: {
                show: true,
                expanded: this.isExpanded
            }
        });
        this.myStyling = new cedrus_fusion_2.ToolbarStylingModel({
            container: {
                class: 'cf-green-theme'
            },
            toolbar: {
                class: 'mat-primary'
            }
        });
        this.myToolbar3 = new cedrus_fusion_1.ToolbarModel({
            info: {
                show: true,
                icon: {
                    name: 'stars',
                    type: 'mi',
                    size: '24px'
                }
            },
            close: {
                show: true
            },
            toggle: {
                show: true
            }
        });
        this.myStyling2 = new cedrus_fusion_2.ToolbarStylingModel({
            container: {
                class: 'cf-light-theme'
            },
            toolbar: {
                class: 'mat-accent'
            }
        });
        this.events = [];
        this.checked = false;
        this.items = [
            {
                name: 'Molly',
                city: 'New York',
                avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/fh04.png'
            },
            {
                name: 'Austin',
                city: 'London',
                avatar: 'http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png'
            },
            {
                name: 'Mia',
                city: 'Rio de Janeiro',
                avatar: 'https://www.tm-town.com/assets/default_female300x300-af1ea9327d6293733a8874dbd97ce49e.png'
            }
        ];
        this.selected = [];
        this.myImage1 = new cedrus_fusion_5.ImageModel({
            url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQTAMLURYmqLQEBpqHr0PoiEvqTjT486Krf5_rZItvnSt_OIK-A'
        });
        this.myImageStyling = new cedrus_fusion_6.ImageStylingModel({
            image: {
                class: "my-image"
            }
        });
        this.button1 = new cedrus_fusion_3.ButtonModel({ label: "Toggle my toolbar" });
        this.button2 = new cedrus_fusion_3.ButtonModel({ label: "Close my toolbar" });
        this.button3 = new cedrus_fusion_3.ButtonModel({ label: "Maximize my toolbar" });
    }
    CfDemoToolbar1.prototype.log = function (e) {
        this.events.push(e);
    };
    CfDemoToolbar1.prototype.toggle = function (e) {
        this.collapsibleState = e ? 'active' : 'inactive';
    };
    CfDemoToolbar1.prototype.listLogs = function (e) {
        console.log('e', e);
        this.selected.push(e);
    };
    CfDemoToolbar1.prototype.ngOnInit = function () {
        this.collapsibleState = this.isExpanded ? 'active' : 'inactive';
    };
    CfDemoToolbar1.prototype.toggleMyToolbar = function (event) { this.myControlledToolbar.toggle(event); };
    CfDemoToolbar1.prototype.closeMyToolbar = function (event) { this.myControlledToolbar.toolbarClose(event); };
    CfDemoToolbar1.prototype.maximizeMyToolbar = function (event) { this.myControlledToolbar2.toggleMaximize(event); };
    return CfDemoToolbar1;
}());
__decorate([
    core_1.ViewChild('myControlledToolbar'),
    __metadata("design:type", Object)
], CfDemoToolbar1.prototype, "myControlledToolbar", void 0);
__decorate([
    core_1.ViewChild('myControlledToolbar2'),
    __metadata("design:type", Object)
], CfDemoToolbar1.prototype, "myControlledToolbar2", void 0);
CfDemoToolbar1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-toolbar-1',
        templateUrl: './demo.toolbar-1.html',
        styleUrls: ['./demo.toolbar-1.scss'],
        animations: [
            core_1.trigger('toolbarState', [
                core_1.state('inactive', core_1.style({
                    transform: 'rotateX(90deg)',
                    transformOrigin: 'bottom',
                    height: '0px',
                    display: 'none'
                })),
                core_1.state('active', core_1.style({})),
                core_1.transition('inactive => active', core_1.animate('0.5s ease-in')),
                core_1.transition('active => inactive', core_1.animate('0.5s ease-out'))
            ])
        ]
    })
], CfDemoToolbar1);
exports.CfDemoToolbar1 = CfDemoToolbar1;
//# sourceMappingURL=demo.toolbar-1.js.map