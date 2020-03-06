import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from '../../breadcrumb/breadcrumbitem';


@Component({
  selector: 'app-foreignersoffice',
  templateUrl: './foreignersoffice.component.html',
  styleUrls: ['./foreignersoffice.component.css']
})
export class ForeignersofficeComponent implements OnInit {

  allItems : BreadcrumbItem[] = [{name:"Home", link:"/"},{name:"Governmental Services", link:""},{name:"Foreigner's Office", link:""}];

  constructor() { }

  ngOnInit() {
  }

}
