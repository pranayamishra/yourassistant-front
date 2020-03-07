import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customercarecon',
  templateUrl: './customercarecon.component.html',
  styleUrls: ['./customercarecon.component.css']
})
export class CustomercareconComponent implements OnInit {

	breacrumbItems : any[] = [{name:"Home", link:"/"},{name:"Consumer Services", link:""},{name:"Customer Care Con", link:""}];


  constructor() { }

  ngOnInit() {
  }

}
