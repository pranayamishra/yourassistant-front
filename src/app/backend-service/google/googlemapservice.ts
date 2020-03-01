import { NgZone, OnInit, Injectable } from '@angular/core';
import { Location } from '../google/location';
import { MapsAPILoader, GoogleMapsAPIWrapper, AgmMap } from '@agm/core';

declare var google: any;

@Injectable({
	providedIn: 'root',
})
export class GoogleMapService {

	geocoder: any;

	constructor(public mapsApiLoader: MapsAPILoader, private zone: NgZone, private wrapper: GoogleMapsAPIWrapper) {
		this.mapsApiLoader = mapsApiLoader;
		this.zone = zone;
		this.wrapper = wrapper;
		this.mapsApiLoader.load().then(() => {
			this.geocoder = new google.maps.Geocoder();
		});
	}



	enhanceLocationWithGeocode(location: Location, callback: any) {

		if (!this.geocoder) this.geocoder = new google.maps.Geocoder()
		this.geocoder.geocode({
			'address': location.getFullAddress()
		}, (results, status) => {

			if (status == google.maps.GeocoderStatus.OK) {
				location.lat = results[0].geometry.location.lat();
				location.lng = results[0].geometry.location.lng();
				location.formatted_address = results[0].formatted_address;
				location.isGeocoded = true;

			} else {
				location.isGeocoded = false;

			}
			callback(location);

		})

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