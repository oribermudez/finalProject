import { Component, OnInit } from '@angular/core';
import {SessionService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {
    services: [{'Phone': ''}, {'Internet': ''}, {'Television': ''}],
  };
  constructor(private session: SessionService, private route: Router) { }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(user => {
        this.user = user;
        console.log(this.user);
      });
  }

}
