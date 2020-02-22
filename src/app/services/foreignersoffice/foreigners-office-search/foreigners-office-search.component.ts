import { Component, OnInit } from '@angular/core';
import {Location} from '../../../general-components/google-maps-address-search/google-maps-address-search.component'

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
