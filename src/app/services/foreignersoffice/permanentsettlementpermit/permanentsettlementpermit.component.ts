import { Component, OnInit } from '@angular/core';
import { sharedStylesheetJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-permanentsettlementpermit',
  templateUrl: './permanentsettlementpermit.component.html',
  styleUrls: ['./permanentsettlementpermit.component.css']
})
export class PermanentsettlementpermitComponent implements OnInit {

    collapsed: boolean = true;
	constructor() { }

  ngOnInit() {
  }
  toggle() {
	if(this.collapsed == true) {
		this.collapsed = false;
	} else {
		this.collapsed = true;
	}
}
}
