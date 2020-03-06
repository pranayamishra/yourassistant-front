import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centralservices',
  templateUrl: './centralservices.component.html',
  styleUrls: ['./centralservices.component.css']
})
export class CentralservicesComponent implements OnInit {

  allItems : any[] = [{name:"Home", link:"/"},{name:"Governmental Services", link:""},{name:"Central Services", link:""}];

  constructor() { }

  ngOnInit() {
  }

}
