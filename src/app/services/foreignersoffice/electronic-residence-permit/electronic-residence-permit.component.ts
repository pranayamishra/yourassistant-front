import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronic-residence-permit',
  templateUrl: './electronic-residence-permit.component.html',
  styleUrls: ['./electronic-residence-permit.component.css']
})
export class ElectronicResidencePermitComponent implements OnInit {

	    breacrumbItems : any[] = [{name:"Home", link:"/"},{name:"Governmental Services", link:""},{name:"Foreigner's Office", link:"/services/foreignersoffice"}, {name:"Electronic Residence Permit", link:""}];


  constructor() { }

  ngOnInit() {
  }

}
