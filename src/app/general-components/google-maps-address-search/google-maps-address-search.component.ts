import { Component, Output, EventEmitter, NgZone, ViewChild, ElementRef } from '@angular/core';
import { Location } from '../../backend-service/location';
import { MapsAPILoader, GoogleMapsAPIWrapper, AgmMap } from '@agm/core';

declare var google: any;


@Component({
	selector: 'app-google-maps-address-search',
	templateUrl: './google-maps-address-search.component.html',
	styleUrls: ['./google-maps-address-search.component.css']
})

export class GoogleMapsAddressSearchComponent {
	geocoder: any;

	location: Location;

	@Output() public addressEvent: EventEmitter<Location> = new EventEmitter<Location>();

	@ViewChild('search', { static: true }) searchElementRef: ElementRef;

	constructor(public mapsApiLoader: MapsAPILoader, private zone: NgZone, private wrapper: GoogleMapsAPIWrapper) {
		this.mapsApiLoader = mapsApiLoader;
		this.zone = zone;
		this.wrapper = wrapper;
		this.location = new Location();
	}

	ngAfterViewInit() {
		this.mapsApiLoader.load().then(() => {
			let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
              types: ['address'],
              componentRestrictions: {'country': 'de'}
            });
			
			
		});

	}

	findAdress() {

	}

	updateOnMap() {
		this.geocode();
	}

	geocode() {

		if (!this.geocoder) this.geocoder = new google.maps.Geocoder()
		this.geocoder.geocode({
			'address': this.location.suggested_address
		}, (results, status) => {

			if (status == google.maps.GeocoderStatus.OK) {
				this.location.lat = results[0].geometry.location.lat();
				this.location.lng = results[0].geometry.location.lng();
				this.location.formatted_address = results[0].formatted_address;
				this.location.isGeocoded = true;
				console.log("geocoded: returning =>" + this.location.lat + ", " + this.location.lng);
				this.addressEvent.emit(this.location);

			} else {
				this.location.isGeocoded = false;
				window.alert('invalid address');

			}

		})

	}

}
