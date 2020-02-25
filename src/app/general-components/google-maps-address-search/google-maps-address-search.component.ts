import { Component, Input, ViewChild, OnInit, NgZone, Output, EventEmitter } from '@angular/core';
import {Location} from '../../backend-service/google/location';
import {GoogleMapService} from '../../backend-service/google/googlemapservice';



@Component({
	selector: 'app-google-maps-address-search',
	templateUrl: './google-maps-address-search.component.html',
	styleUrls: ['./google-maps-address-search.component.css']
})

export class GoogleMapsAddressSearchComponent {
	location: Location = new Location();

	googlemapservice: GoogleMapService;

	@Output() public addressEvent: EventEmitter<Location> = new EventEmitter<Location>();

	constructor(private googleMapService : GoogleMapService){
		this.googlemapservice = googleMapService;
	}
	
	updateOnMap() {
		window.alert('inside')
		this.googlemapservice.findLocation(this.location);
		window.alert('find location complete');
		if(this.location.isGeocoded) {
			this.fireAddressEvent();
		}
		else {
			window.alert('invalid address');
		}
	}


	fireAddressEvent() {
		this.addressEvent.emit(this.location);
	}

}
