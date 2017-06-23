import { Component, Input, Output, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { LatLngLiteral } from 'angular2-google-maps/core';
import { CfGoogleMapsComponent } from 'cedrus-fusion';
import { CfLocationService } from 'cedrus-fusion';
import { GoogleMapsModel } from 'cedrus-fusion';
import { GoogleMapsMarkerModel } from 'cedrus-fusion';
import { GoogleMapsCircleModel } from 'cedrus-fusion';
import { GoogleMapsPolylineModel } from 'cedrus-fusion';
import { GoogleMapsPointModel } from 'cedrus-fusion';
import { GoogleMapsPolygonModel } from 'cedrus-fusion';
import { GoogleMapsStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-google-maps-2',
	templateUrl: './demo.google-maps-2.html',
 	styleUrls: ['./demo.google-maps-2.scss'],
  providers: [CfLocationService] 	
})

export class CfDemoGoogleMaps2 implements OnInit {

	@ViewChild('myMapComponent') myMapComponent: CfGoogleMapsComponent;

	located = false;

	myLocation = {
		lat: 0,
		lng: 0
	};

	myMap = new GoogleMapsModel({
	  latitude: 0,
	  longitude: 0,
	  zoom: 1,
		mapDraggable: this.located,
		markers: [],
		circles: [],
		polylines: [],
		polygons: []
	});

	line = new GoogleMapsPolylineModel({
		strokeColor: 'purple',
		editable: true,
		polylineDraggable: true,
		points: []
	});

	polygon = new GoogleMapsPolygonModel({	
		fillColor: 'lightseagreen',	
		clickable: false,
		polyDraggable: false,
		geodesic: true,
		editable: false,
		strokeColor: 'darkseagreen',
	  paths: []
	});

	constructor(private locationService: CfLocationService) {
	}

	ngOnInit() {

		this.locationService.getCurrentPosition().subscribe(location => {
      console.log('location', location);
      this.myLocation.lat = location.coords.latitude;
      this.myLocation.lng = location.coords.longitude;
    });

	}

	locateMe() {
		this.myMapComponent.cfGoogleMap.latitude = this.myLocation.lat;
		this.myMapComponent.cfGoogleMap.longitude = this.myLocation.lng;
		this.myMapComponent.cfGoogleMap.zoom = 10;
		this.myMapComponent.cfGoogleMap.mapDraggable = true;
		this.located = true;
	}

	addMarker() {
		var marker = new GoogleMapsMarkerModel({
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
	}

	addCircle() {
		var circle = new GoogleMapsCircleModel({
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
	}

	addPolyline() {
		this.line.points.push(
			{
				latitude: this.myLocation.lat - 0.03,
				longitude: this.myLocation.lng - 0.03,
			},
			{
				latitude: this.myLocation.lat - 0.02,
				longitude: this.myLocation.lng + 0.07,
			},
			{
				latitude: this.myLocation.lat - 0.1,
				longitude: this.myLocation.lng - 0.1,
			}
		);
		this.myMapComponent.properties.polylines.push(this.line);
	}

	addPolygone() {
		this.polygon.paths = [
	    { lat: this.myLocation.lat + 0.5, lng: this.myLocation.lng - 0.5 },
	    { lat: this.myLocation.lat + 0.1, lng: this.myLocation.lng + 0.1 },
	    { lat: this.myLocation.lat, 			lng: this.myLocation.lng + 0.3 },
	    { lat: this.myLocation.lat - 0.2, lng: this.myLocation.lng + 0.2 },
	    { lat: this.myLocation.lat - 0.4, lng: this.myLocation.lng - 0.4 }
	  ];
		this.myMapComponent.properties.polygons.push(this.polygon);
	}

	events = [];

	log(e) {
		this.events.push(e);
		
		if(e.eventName === 'mapClick') {
			this.myMapComponent.properties.markers.push({
	      latitude: e.event.coords.lat,
	      longitude: e.event.coords.lng,
	      markerDraggable: true
	    });
		}
	}

	clearList() {
		this.events.splice(0, this.events.length);
	}

	maMapStyling = new GoogleMapsStylingModel({
		container: {
			class: 'my-google-map'
		}
	})
}