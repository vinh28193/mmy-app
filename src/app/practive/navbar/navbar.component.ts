import { Component, OnInit } from '@angular/core';

import { Nav } from './nav';

import { NavbarService} from './navbar.service';

@Component({
  selector: 'app-practive-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    public logo = '';
    public navs: Nav[];
    public footer = '';
    constructor(private navbarService: NavbarService) { }

    ngOnInit() {
      this.getNav();
    }
    public getNav() {
        return this.navbarService.getNav().subscribe(navs => this.navs = navs);
    }

}
