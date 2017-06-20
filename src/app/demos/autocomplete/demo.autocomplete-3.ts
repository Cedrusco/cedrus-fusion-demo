import { Component } from '@angular/core';
import { AutocompleteModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-autocomplete-3',
	templateUrl: './demo.autocomplete-3.html',
 	styleUrls: ['./demo.autocomplete-3.scss']
})

export class CfDemoAutocomplete3 {
	contacts = [
		{ name: 'Marina Augustine', email: 'm.augustine@demo.com', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYUoCWNmTAwLuuTgmEEcEDPgYbzXfb8UuH2yGdBPNkTYBZQhs' },
    { name: 'Oddr Sarno', email: 'o.sarno@demo.com', avatar: 'http://icon-icons.com/icons2/108/PNG/128/males_male_avatar_man_people_faces_18359.png' },
    { name: 'Nick Giannopoulos', email: 'n.giannopoulos@demo.com', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbhkt3qxWNNvAnzurmvuBN3aS7LOW_31Whs5Dmi-JJjYwTr0iZ' },
    { name: 'Narayana Garner', email: 'n.garner@demo.com', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3j8qlZvZrU8ZkI4BCP0f6GWDm282u73SUI8kvaBmWsFMMzK04' },
    { name: 'Anita Gros', email: 'a.gros@demo.com', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bcQKYxKsDAwpZCMlUW7iabSUUZzFkav0zoIzNSRbtUmITQHx' },
    { name: 'Megan Smith', email: 'm.smith@demo.com', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaAioK9t_Qq8yFEkw5TnmQbXtoDY6Sb1KYIuqDRfO3OdylY2B2' },
    { name: 'Tsvetko Metzger', email: 't.metzger@demo.com', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdv__cpB4IxA2NFryGdxVfpmTkfyusPuvFO7c8uLvIJauvWv1xKw' },
    { name: 'Hector Simek', email: 'h.simek@demo.com', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJoKKHvT3oYzeBmiHAptMEfaIXk__CVLXDVybMUvNWraGVMdUFQ' },
	];

	myChipsAutocomplete = new AutocompleteModel({
		source: this.contacts,
		displayField: 'name',
		useChips: true,
		chipsReadOnly: true
	});	

	demoValues = [];
	demoSelections = [];

	logValue(e) {
		console.log('e', e);
		this.demoValues = []; 
		this.demoValues.push(e); 
	}

	logSelected(e) {
		console.log('e', e);
		this.demoSelections = []; 
		this.demoSelections.push(e); 
	}
}