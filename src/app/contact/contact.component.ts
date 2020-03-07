import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	breacrumbItems: any[] = [{ name: "Home", link: "/" }, { name: "Contact", link: "" }];


	constructor() { }

	ngOnInit() {
	}

}
