import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-google-maps',
	templateUrl: './google-maps.component.html',
	styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {
	@Input() title:string;
	@Input() latitude:number;
	@Input() longitude:number;
	@Input() address: string;
	zoom = 15;
	constructor() { }

	ngOnInit() {
	}

}
