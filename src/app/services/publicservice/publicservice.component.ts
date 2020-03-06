import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-publicservice',
	templateUrl: './publicservice.component.html',
	styleUrls: ['./publicservice.component.css']
})
export class PublicserviceComponent implements OnInit {
	allItems: any[] = [{ name: "Home", link: "/" }, { name: "Governmental Services", link: "" }, { name: "Public Services", link: "" }];


	constructor() { }

	ngOnInit() {
	}

}
