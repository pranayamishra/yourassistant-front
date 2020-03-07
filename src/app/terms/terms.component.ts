import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {
		breacrumbItems: any[] = [{ name: "Home", link: "/" }, { name: "Terms and Conditions", link: "" }];



  constructor() { }

  ngOnInit() {
  }

}
