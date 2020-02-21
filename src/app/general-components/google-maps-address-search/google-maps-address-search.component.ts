import { Component, Input, ViewChild, OnInit, NgZone } from '@angular/core';
import { MapsAPILoader, AgmMap, GoogleMapsAPIWrapper } from '@agm/core';



declare var google: any;

interface Marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

interface Location {
	lat: number;
	lng: number;
	viewport?: Object;
	zoom: number;
	address_level_1?: string;
	address_level_2?: string;
	address_country?: string;
	address_zip?: string;
	address_state?: string;
	marker?: Marker;
}

@Component({
	selector: 'app-google-maps-address-search',
	templateUrl: './google-maps-address-search.component.html',
	styleUrls: ['./google-maps-address-search.component.css']
})
export class GoogleMapsAddressSearchComponent implements OnInit {
	geocoder: any;
	public location: Location = {
		lat: 171.678418,
		lng: 1.809007,
		marker: {
			lat: 181.678418,
			lng: 17.809007,
			draggable: true
		},
		zoom: 5
	};



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
		this.location.marker.draggable = true;
	}
	updateOnMap() {
		let full_address: string = this.location.address_level_1 || ""
		if (this.location.address_level_2) full_address = full_address + " " + this.location.address_level_2
		if (this.location.address_state) full_address = full_address + " " + this.location.address_state
		if (this.location.address_country) full_address = full_address + " " + this.location.address_country

		this.findLocation(full_address);
	}
	findLocation(address) {
		if (!this.geocoder) this.geocoder = new google.maps.Geocoder()
		this.geocoder.geocode({
			'address': address
		}, (results, status) => {
			if (status == google.maps.GeocoderStatus.OK) {
				window.alert(results[0].geometry.location.lat())
				this.location.lat = results[0].geometry.location.lat();
				this.location.lng = results[0].geometry.location.lng();
				this.location.marker.lat = results[0].geometry.location.lat();
				this.location.marker.lng = results[0].geometry.location.lng();

			} else {
				window.alert("Sorry, this search produced no results.");
			}
		})
	}
	markerDragEnd(m: any, $event: any) {
		this.location.marker.lat = m.coords.lat;
		this.location.marker.lng = m.coords.lng;
		this.findAddressByCoordinates();
	}

	findAddressByCoordinates() {
		this.geocoder.geocode({
			'location': {
				lat: this.location.marker.lat,
				lng: this.location.marker.lng
			}
		}, (results, status) => {
			this.decomposeAddressComponents(results);
		})
	}

	decomposeAddressComponents(addressArray) {
		if (addressArray.length == 0) return false;
		let address = addressArray[0].address_components;

		for (let element of address) {
			if (element.length == 0 && !element['types']) continue

			if (element['types'].indexOf('street_number') > -1) {
				this.location.address_level_1 = element['long_name'];
				continue;
			}
			if (element['types'].indexOf('route') > -1) {
				this.location.address_level_1 += ', ' + element['long_name'];
				continue;
			}
			if (element['types'].indexOf('locality') > -1) {
				this.location.address_level_2 = element['long_name'];
				continue;
			}
			if (element['types'].indexOf('administrative_area_level_1') > -1) {
				this.location.address_state = element['long_name'];
				continue;
			}
			if (element['types'].indexOf('country') > -1) {
				this.location.address_country = element['long_name'];
				continue;
			}
			if (element['types'].indexOf('postal_code') > -1) {
				this.location.address_zip = element['long_name'];
				continue;
			}
		}
	}
}
