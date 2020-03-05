import {
	Component, OnInit, ChangeDetectorRef
} from '@angular/core';
import { Location } from '../../../backend-service/location';

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
	
	}

	ngOnInit() {
	}

	setLocation(location: Location) {
		this.location = location;
		this.changeDetectorRef.detectChanges();
	}

}
