import { Component, OnInit, Input } from '@angular/core';
import {BreadcrumbItem} from './breadcrumbitem';

@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

	@Input() allItems: any[];

	constructor() { }

	ngOnInit() {
	}

}
