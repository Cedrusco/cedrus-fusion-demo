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
var cedrus_fusion_8 = require("cedrus-fusion");
var CfDemoGoogleMaps1 = (function () {
    function CfDemoGoogleMaps1(locationService) {
        this.locationService = locationService;
        this.located = false;
        this.myLocation = {
            lat: 0,
            lng: 0
        };
        this.myMap = new cedrus_fusion_3.GoogleMapsModel({
            latitude: 0,
            longitude: 0,
            zoom: 1,
            usePanning: true,
            mapDraggable: this.located,
            mapTypeControl: true,
            markers: [],
            circles: [],
            polylines: [],
            polygons: []
        });
        this.line = new cedrus_fusion_6.GoogleMapsPolylineModel({
            strokeColor: 'purple',
            editable: true,
            polylineDraggable: true,
            points: []
        });
        this.polygon = new cedrus_fusion_7.GoogleMapsPolygonModel({
            fillColor: 'lightseagreen',
            clickable: false,
            polyDraggable: false,
            geodesic: true,
            editable: false,
            strokeColor: 'darkseagreen',
            paths: []
        });
        this.events = [];
        this.maMapStyling = new cedrus_fusion_8.GoogleMapsStylingModel({
            container: {
                class: 'my-google-map'
            }
        });
    }
    CfDemoGoogleMaps1.prototype.ngOnInit = function () {
        var _this = this;
        this.locationService.getCurrentPosition().subscribe(function (location) {
            console.log('location', location);
            _this.myLocation.lat = location.coords.latitude;
            _this.myLocation.lng = location.coords.longitude;
        });
    };
    CfDemoGoogleMaps1.prototype.locateMe = function () {
        this.myMapComponent.cfGoogleMap.latitude = this.myLocation.lat;
        this.myMapComponent.cfGoogleMap.longitude = this.myLocation.lng;
        this.myMapComponent.cfGoogleMap.zoom = 10;
        this.myMapComponent.cfGoogleMap.mapDraggable = true;
        this.located = true;
    };
    CfDemoGoogleMaps1.prototype.addMarker = function () {
        var marker = new cedrus_fusion_4.GoogleMapsMarkerModel({
            latitude: this.myLocation.lat,
            longitude: this.myLocation.lng,
            label: 'L',
            info: {
                isOpen: true,
                content: 'Some place'
            },
            markerDraggable: true
        });
        this.myMapComponent.properties.markers.push(marker);
    };
    CfDemoGoogleMaps1.prototype.addCircle = function () {
        var circle = new cedrus_fusion_5.GoogleMapsCircleModel({
            latitude: this.myLocation.lat + 0.1,
            longitude: this.myLocation.lng + 0.1,
            radius: 5000,
            editable: true,
            circleDraggable: true,
            fillColor: 'lightgreen',
            strokeColor: 'green',
            strokeWeight: 3,
            strokeOpacity: 0.5,
        });
        this.myMapComponent.properties.circles.push(circle);
    };
    CfDemoGoogleMaps1.prototype.addPolyline = function () {
        this.line.points.push({
            latitude: this.myLocation.lat - 0.03,
            longitude: this.myLocation.lng - 0.03,
        }, {
            latitude: this.myLocation.lat - 0.02,
            longitude: this.myLocation.lng + 0.07,
        }, {
            latitude: this.myLocation.lat - 0.1,
            longitude: this.myLocation.lng - 0.1,
        });
        this.myMapComponent.properties.polylines.push(this.line);
    };
    CfDemoGoogleMaps1.prototype.addPolygone = function () {
        this.polygon.paths = [
            { lat: this.myLocation.lat + 0.5, lng: this.myLocation.lng - 0.5 },
            { lat: this.myLocation.lat + 0.1, lng: this.myLocation.lng + 0.1 },
            { lat: this.myLocation.lat, lng: this.myLocation.lng + 0.3 },
            { lat: this.myLocation.lat - 0.2, lng: this.myLocation.lng + 0.2 },
            { lat: this.myLocation.lat - 0.4, lng: this.myLocation.lng - 0.4 }
        ];
        this.myMapComponent.properties.polygons.push(this.polygon);
    };
    CfDemoGoogleMaps1.prototype.log = function (e) {
        this.events.push(e);
        if (e.eventName === 'mapClick') {
            this.myMapComponent.properties.markers.push({
                latitude: e.event.coords.lat,
                longitude: e.event.coords.lng,
                markerDraggable: true
            });
        }
    };
    CfDemoGoogleMaps1.prototype.clearList = function () {
        this.events.splice(0, this.events.length);
    };
    return CfDemoGoogleMaps1;
}());
__decorate([
    core_1.ViewChild('myMapComponent'),
    __metadata("design:type", cedrus_fusion_1.CfGoogleMapsComponent)
], CfDemoGoogleMaps1.prototype, "myMapComponent", void 0);
__decorate([
    core_1.ViewChild('myMapByService'),
    __metadata("design:type", Object)
], CfDemoGoogleMaps1.prototype, "myMapByService", void 0);
CfDemoGoogleMaps1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cf-demo-google-maps-1',
        templateUrl: './demo.google-maps-1.html',
        styleUrls: ['./demo.google-maps-1.scss']
    }),
    __metadata("design:paramtypes", [cedrus_fusion_2.CfLocationService])
], CfDemoGoogleMaps1);
exports.CfDemoGoogleMaps1 = CfDemoGoogleMaps1;
//# sourceMappingURL=demo.google-maps-1.js.map