import {
	Component, OnInit, ChangeDetectorRef
} from '@angular/core';
import { Location } from '../../../backend-service/google/location';

@Component({
	selector: 'app-foreigners-office-search',
	templateUrl: './foreigners-office-search.component.html',
	styleUrls: ['./foreigners-office-search.component.css']
})
export class ForeignersOfficeSearchComponent implements OnInit {

	location: Location;
	title: string = 'Your Foreigners Office';

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		this.location = new Location();
		this.location.lat = 40.7487727;
		this.location.lng = -73.9849336;
	}

	ngOnInit() {
	}

	setLocation(location: Location) {
		this.location = location;
		this.changeDetectorRef.detectChanges();
	}

}
