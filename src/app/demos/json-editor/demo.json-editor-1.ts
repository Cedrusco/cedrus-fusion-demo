import { Component } from '@angular/core';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-json-editor-1',
	templateUrl: './demo.json-editor-1.html',
 	styleUrls: ['./demo.json-editor-1.scss']
})

export class CfDemoJsonEditor1 {

  myJsonObject = {
		name: 'Alderaan', 
		astronomical_data: {
			rotation_period: '24', 
			orbital_period: '364',
			gravity: '1 standard',
			moons: [
				{
					name: 'phobos',
					period: 28
				},
				{
					name: 'deimos',
					period: 14
				}
			]
		},
		geographical_data: { 
			diameter: '12500', 
			climate: 'temperate', 
			terrain: 'grasslands, mountains', 
			surface_water: '40',
			atmosphere : {
				nitrogen: '78',
				oxygen: '21',
				argon: '1'
			}
		}, 
		population: '2000000000', 
		residents: [
			[ 'https://swapi.co/api/people/5/', 'https://swapi.co/api/people/68/', 'https://swapi.co/api/people/81/' ],
			[ 'https://swapi.co/api/people/5/', 'https://swapi.co/api/people/68/', 'https://swapi.co/api/people/81/' ]
		], 
		films: [ 'https://swapi.co/api/films/6/', 'https://swapi.co/api/films/1/' ],
		created: '2014-12-10T11:35:48.479000Z', 
		edited: '2014-12-20T20:58:18.420000Z', 
		url: 'https://swapi.co/api/planets/2/'
	}
}
