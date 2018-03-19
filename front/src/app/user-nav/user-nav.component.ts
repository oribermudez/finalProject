import { Component, OnInit } from '@angular/core';
import {SessionService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {
  user = {
    services: [{'Phone': ''}, {'Internet': ''}, {'Television': ''}],
  };
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
