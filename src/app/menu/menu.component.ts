import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../backend-service/user.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('');
  }

}
