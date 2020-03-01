import { Component, Output, EventEmitter } from '@angular/core';
import { Location } from '../../backend-service/google/location';
import { GoogleMapService } from '../../backend-service/google/googlemapservice';



@Component({
	selector: 'app-google-maps-address-search',
	templateUrl: './google-maps-address-search.component.html',
	styleUrls: ['./google-maps-address-search.component.css']
})

export class GoogleMapsAddressSearchComponent {


	@Output() public addressEvent: EventEmitter<Location> = new EventEmitter<Location>();

	constructor(private googleMapService: GoogleMapService, private location: Location) {
	}

	updateOnMap() {
		this.geocode();
	}

	geocode() {

		this.googleMapService.enhanceLocationWithGeocode(this.location, (result:Location) => {
			if (result.isGeocoded) {
				this.addressEvent.emit(result);
			}
			else {
				window.alert('invalid address');
			}

		});


	}

}
