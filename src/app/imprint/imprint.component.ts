import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.css']
})
export class ImprintComponent implements OnInit {


		breacrumbItems: any[] = [{ name: "Home", link: "/" }, { name: "Imprint", link: "" }];


  constructor() { }

  ngOnInit() {
  }

}
