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
var CfDemoFileUploader1 = (function () {
    function CfDemoFileUploader1(cfFileUploaderService) {
        this.cfFileUploaderService = cfFileUploaderService;
        this.myUploaderOptions = new cedrus_fusion_3.FileUploaderModel({
            main: {
                "url": "/upload",
                "removeBySuccess": true,
                "uniqueFiles": true
            },
            "dropZone": true,
            "dropZoneLabel": "Drop files here or select:",
            "showActions": true,
            "showItemActions": true
        });
        this.myUploaderStyling = new cedrus_fusion_4.FileUploaderStylingModel({
            dropZone: {
                class: 'dafgadga'
            },
            uploadButton: new cedrus_fusion_5.ButtonStylingModel({
                button: {
                    class: 'mat-primary mat-raised-button'
                }
            }),
            removeButton: new cedrus_fusion_5.ButtonStylingModel({
                button: {
                    class: 'mat-primary mat-raised-button'
                }
            }),
            uploadAllButton: new cedrus_fusion_5.ButtonStylingModel({
                button: {
                    class: 'mat-primary mat-raised-button'
                }
            }),
            removeAllButton: new cedrus_fusion_5.ButtonStylingModel({
                button: {
                    class: 'mat-primary mat-raised-button'
                }
            })
        });
        this.files = [];
    }
    CfDemoFileUploader1.prototype.loadFiles = function () {
        this.cfFileUploaderService.openLoadWindow(this.myUploader);
    };
    CfDemoFileUploader1.prototype.sendFiles = function () {
        this.cfFileUploaderService.sendFiles(this.myUploader);
    };
    CfDemoFileUploader1.prototype.clearList = function () {
        this.cfFileUploaderService.clearAll(this.myUploader);
    };
    CfDemoFileUploader1.prototype.log = function (e) {
        console.log('e', e);
        if (e.status === 200)
            this.files.push(e.file.name);
    };
    CfDemoFileUploader1.prototype.ngOnInit = function () {
        console.log('demo init', this);
    };
    return CfDemoFileUploader1;
}());
__decorate([
    core_1.ViewChild('myUploader'),
    __metadata("design:type", cedrus_fusion_1.CfFileUploaderComponent)
], CfDemoFileUploader1.prototype, "myUploader", void 0);
CfDemoFileUploader1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-file-uploader-1',
        templateUrl: './demo.file-uploader-1.html',
        styleUrls: ['./demo.file-uploader-1.scss']
    }),
    __metadata("design:paramtypes", [cedrus_fusion_2.CfFileUploaderService])
], CfDemoFileUploader1);
exports.CfDemoFileUploader1 = CfDemoFileUploader1;
//# sourceMappingURL=demo.file-uploader-1.js.map