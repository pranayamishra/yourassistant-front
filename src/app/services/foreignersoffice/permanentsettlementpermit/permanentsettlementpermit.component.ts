import { Component, OnInit } from '@angular/core';
import { sharedStylesheetJitUrl } from '@angular/compiler';

@Component({
	selector: 'app-permanentsettlementpermit',
	templateUrl: './permanentsettlementpermit.component.html',
	styleUrls: ['./permanentsettlementpermit.component.css']
})
export class PermanentsettlementpermitComponent implements OnInit {

	isCollapsedDocuments: boolean = true;
	isCollapsedTips: boolean = true;
  panelOpenState = false;
    allItems : any[] = [{name:"Home", link:"/"},{name:"Governmental Services", link:""},{name:"Foreigner's Office", link:"/services/foreignersoffice"}, {name:"Permanent Settlement Permit", link:""}];


	constructor() { }

	ngOnInit() {
	}
	toggleDocuments() {
		if (this.isCollapsedDocuments == true) {
			this.isCollapsedDocuments = false;
		} else {
			this.isCollapsedDocuments = true;
		}
	}
	toggleTips() {
		if (this.isCollapsedTips == true) {
			this.isCollapsedTips = false;
		} else {
			this.isCollapsedTips = true;
		}
	}
}

