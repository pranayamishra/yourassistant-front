import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-google-maps',
	templateUrl: './google-maps.component.html',
	styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {
	@Input() title;
	@Input() latitude;
	@Input() longitude;
	zoom = 15;
	constructor() { }

	ngOnInit() {
	}

}
