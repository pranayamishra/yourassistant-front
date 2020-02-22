import { Component, Input, ViewChild, OnInit, NgZone, Output, EventEmitter } from '@angular/core';
import { MapsAPILoader, AgmMap, GoogleMapsAPIWrapper } from '@agm/core';



declare var google: any;



export class Location {

	lat?: number;
	lng?: number;
	viewport?: Object;
	zoom?: number;
	address_level_1?: string;
	address_level_2?: string;
	address_country?: string;
	address_zip?: string;
	address_state?: string;
	formatted_address?: string;
}
@Component({
	selector: 'app-google-maps-address-search',
	templateUrl: './google-maps-address-search.component.html',
	styleUrls: ['./google-maps-address-search.component.css']
})

export class GoogleMapsAddressSearchComponent implements OnInit {
	geocoder: any;
	location: Location = new Location();

	@Output() public addressEvent: EventEmitter<Location> = new EventEmitter<Location>();


	@ViewChild(AgmMap, { static: false }) map: AgmMap;
	constructor(public mapsApiLoader: MapsAPILoader, private zone: NgZone, private wrapper: GoogleMapsAPIWrapper) {
		this.mapsApiLoader = mapsApiLoader;
		this.zone = zone;
		this.wrapper = wrapper;
		this.mapsApiLoader.load().then(() => {
			this.geocoder = new google.maps.Geocoder();
		});
	}
	ngOnInit() {
	}
	updateOnMap() {
		let full_address: string = this.location.address_level_1 || ""
		if (this.location.address_level_2)
			full_address = full_address + " " + this.location.address_level_2
		if (this.location.address_state)
			full_address = full_address + " " + this.location.address_state
		if (this.location.address_country)
			full_address = full_address + " " + this.location.address_country

		this.findLocation(full_address);
	}
	findLocation(address) {
		if (!this.geocoder) this.geocoder = new google.maps.Geocoder()
		this.geocoder.geocode({
			'address': address
		}, (results, status) => {
			if (status == google.maps.GeocoderStatus.OK) {
				this.location.lat = results[0].geometry.location.lat();
				this.location.lng = results[0].geometry.location.lng();
				this.location.formatted_address = results[0].formatted_address;
				this.fireAddressEvent();

			} else {
				window.alert("Sorry, this search produced no results.");
			}
		})
	}

	fireAddressEvent() {
		this.addressEvent.emit(this.location);
	}
	// markerDragEnd(m: any, $event: any) {
	// 	this.marker.lat = m.coords.lat;
	// 	this.marker.lng = m.coords.lng;
	// 	this.findAddressByCoordinates();
	// }

	// findAddressByCoordinates() {
	// 	this.geocoder.geocode({
	// 		'location': {
	// 			lat: this.marker.lat,
	// 			lng: this.marker.lng
	// 		}
	// 	}, (results, status) => {
	// 		this.decomposeAddressComponents(results);
	// 	})
	// }

	// decomposeAddressComponents(addressArray) {
	// 	if (addressArray.length == 0) return false;
	// 	let address = addressArray[0].address_components;

	// 	for (let element of address) {
	// 		if (element.length == 0 && !element['types']) continue

	// 		if (element['types'].indexOf('street_number') > -1) {
	// 			this.address_level_1 = element['long_name'];
	// 			continue;
	// 		}
	// 		if (element['types'].indexOf('route') > -1) {
	// 			this.address_level_1 += ', ' + element['long_name'];
	// 			continue;
	// 		}
	// 		if (element['types'].indexOf('locality') > -1) {
	// 			this.address_level_2 = element['long_name'];
	// 			continue;
	// 		}
	// 		if (element['types'].indexOf('administrative_area_level_1') > -1) {
	// 			this.address_state = element['long_name'];
	// 			continue;
	// 		}
	// 		if (element['types'].indexOf('country') > -1) {
	// 			this.address_country = element['long_name'];
	// 			continue;
	// 		}
	// 		if (element['types'].indexOf('postal_code') > -1) {
	// 			this.address_zip = element['long_name'];
	// 			continue;
	// 		}
	// 	}
	// }
}
