import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-foreignersoffice',
  templateUrl: './foreignersoffice.component.html',
  styleUrls: ['./foreignersoffice.component.css']
})
export class ForeignersofficeComponent implements OnInit {

  breacrumbItems : any[] = [{name:"Home", link:"/"},{name:"Governmental Services", link:""},{name:"Foreigner's Office", link:""}];

  constructor() { }

  ngOnInit() {
  }

}
