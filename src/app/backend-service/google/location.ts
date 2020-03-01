import { Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root',
})
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
	isGeocoded: boolean = false;

	public getFullAddress() : string {
		let full_address: string = this.address_level_1 || ""
		if (this.address_level_2)
			full_address = full_address + " " + this.address_level_2
		if (this.address_state)
			full_address = full_address + " " + this.address_state
		if (this.address_country)
			full_address = full_address + " " + this.address_country
		return full_address;
	}
}