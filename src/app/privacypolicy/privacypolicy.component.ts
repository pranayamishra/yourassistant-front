import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.css']
})
export class PrivacypolicyComponent implements OnInit {

		breacrumbItems: any[] = [{ name: "Home", link: "/" }, { name: "Privacy Policy", link: "" }];

  constructor() { }

  ngOnInit() {
  }

}
