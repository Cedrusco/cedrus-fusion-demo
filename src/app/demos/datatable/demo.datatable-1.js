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
var CfDemoDatatable1 = (function () {
    function CfDemoDatatable1() {
        this.title = "CF Demo Datatable 1";
        this.icons = [
            new cedrus_fusion_1.IconModel({ name: "thumb_up", type: "mi", size: "40px", color: { foreground: "#197fa5", background: "transparent" } }),
            new cedrus_fusion_1.IconModel({ name: "thumb_down", type: "mi", size: "40px", color: { foreground: "#197fa5", background: "transparent" } }),
            new cedrus_fusion_1.IconModel({ name: "home", type: "mi", size: "40px", color: { foreground: "#197fa5", background: "transparent" } }),
            new cedrus_fusion_1.IconModel({ name: "stars", type: "mi", size: "40px", color: { foreground: "#197fa5", background: "transparent" } }),
            new cedrus_fusion_1.IconModel({ name: "menu", type: "mi", size: "40px", color: { foreground: "#197fa5", background: "transparent" } }),
        ];
        this.myButton = new cedrus_fusion_2.ButtonModel({
            label: "Remove",
            icon: null,
            iconPosition: "left"
        });
        this.mySelected = [];
        this.myDatatable = {
            rows: [
                {
                    name: 'Austin',
                    city: 'London',
                    action: this.myButton,
                    icon: this.icons[0],
                    info: {
                        avatar: 'http://wfarm2.dataknet.com/static/resources/icons/set3/c9f1cdf473a8.png',
                        company: 'British American Tobacco',
                        age: 33,
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ut deleniti nulla ea, iure nam. Consequuntur, atque architecto similique facere explicabo, hic iusto esse fugiat totam, distinctio perspiciatis maiores odit.'
                    }
                },
                {
                    name: 'Molly',
                    city: 'Denver',
                    action: this.myButton,
                    icon: this.icons[1],
                    info: {
                        avatar: 'http://findicons.com/files/icons/1072/face_avatars/300/fh04.png',
                        company: 'General Motors',
                        age: 26,
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, repellat magnam eveniet nisi porro culpa ex tenetur quibusdam iste minus nulla corporis beatae. Excepturi, aut ullam earum dicta tempora, soluta!'
                    }
                },
                {
                    name: 'Raiden',
                    city: 'Tokyo',
                    action: this.myButton,
                    icon: this.icons[4],
                    info: {
                        avatar: 'http://erik-agency.cz/wp-content/uploads/2016/09/avatar2.png',
                        company: 'Nissan Motor',
                        age: 27,
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, in repellendus modi temporibus ratione amet eligendi rem optio quia, ducimus possimus voluptas harum aspernatur veniam consectetur eius accusantium molestiae dolores.'
                    }
                },
                {
                    name: 'Mia',
                    city: 'Rio de Janeiro',
                    action: this.myButton,
                    icon: this.icons[3],
                    info: {
                        avatar: 'https://www.tm-town.com/assets/default_female300x300-af1ea9327d6293733a8874dbd97ce49e.png',
                        company: 'Banco Bradesco',
                        age: 25,
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, eligendi a porro voluptatem accusantium distinctio ipsum, consectetur odio cupiditate, ut autem quam voluptas repellendus unde suscipit. Sunt, facere laudantium odio.'
                    }
                },
                {
                    name: 'Diego',
                    city: 'Madrid',
                    action: this.myButton,
                    icon: this.icons[2],
                    info: {
                        avatar: 'http://icons.veryicon.com/ico/Avatar/Face%20Avatars/Male%20Face%20H1.ico',
                        company: 'Vueling Airlines',
                        age: 35,
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nostrum, exercitationem, amet vel incidunt voluptatibus ea, est obcaecati quam nam ullam aliquam. Vel nihil repellat vero totam magnam cumque laborum.'
                    }
                },
            ],
            columns: [
                { name: 'Name', type: 'standard' },
                { name: 'City', type: 'standard' },
                { name: 'Icon', type: 'cf-icon' },
                { name: 'Action', type: 'cf-button' },
            ],
            rowHeight: 50,
            limit: 3,
            filtering: true,
            expandable: {
                value: true,
                detailsHeight: 130
            },
            selected: this.mySelected
        };
    }
    CfDemoDatatable1.prototype.log = function (ev) {
        var indexInMainRows = this.myDatatable.rows.indexOf(ev.cfItem);
        var indexInSelectedRows = this.mySelected.indexOf(ev.cfItem);
        console.log('ev', ev, ev.cfItem.name, ev.cfItem.city);
        this.myDatatable.rows.splice(indexInMainRows, 1);
        if (this.mySelected.length > 0 && indexInSelectedRows > -1)
            this.mySelected.splice(indexInSelectedRows, 1);
    };
    CfDemoDatatable1.prototype.ngOnInit = function () { };
    return CfDemoDatatable1;
}());
CfDemoDatatable1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-datatable-1',
        templateUrl: './demo.datatable-1.html',
        styleUrls: ['./demo.datatable-1.scss']
    }),
    __metadata("design:paramtypes", [])
], CfDemoDatatable1);
exports.CfDemoDatatable1 = CfDemoDatatable1;
//# sourceMappingURL=demo.datatable-1.js.map