import { Component, OnInit } from '@angular/core';
import {SessionService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-managers-nav',
  templateUrl: './managers-nav.component.html',
  styleUrls: ['./managers-nav.component.css']
})
export class ManagersNavComponent implements OnInit {
  user;
  constructor(private session: SessionService, private route: Router) { }

  ngOnInit() {
    ($('.button-collapse')as any).sideNav();
  }

  logout() {
    this.session.logout()
    .subscribe(data => {
      this.route.navigate(['login']);
      localStorage.removeItem('user');
    });
  }

}
