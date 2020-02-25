import { Component, OnInit } from '@angular/core';
import {Location} from '../../../backend-service/google/location';

@Component({
  selector: 'app-foreigners-office-search',
  templateUrl: './foreigners-office-search.component.html',
  styleUrls: ['./foreigners-office-search.component.css']
})
export class ForeignersOfficeSearchComponent implements OnInit {

 location : Location ;
 title: string = 'Your Foreigners Office';

  constructor() { 
	  this.location = new Location();
  }

  ngOnInit() {
  }

  setLocation(location: Location) {
	  this.location = location;
  }

}
