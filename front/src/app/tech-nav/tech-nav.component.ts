import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import firebase from '../services/firebase.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-tech-nav',
  templateUrl: './tech-nav.component.html',
  styleUrls: ['./tech-nav.component.css']
})
export class TechNavComponent implements OnInit {
  user;
  constructor(private session: SessionService, private route: Router) { }

  ngOnInit() {
    ($('.button-collapse')as any).sideNav();
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  logout() {
    this.session.logout()
    .subscribe(data => {
      this.route.navigate(['login']);
      localStorage.removeItem('user');
    });
    firebase.database().ref(this.user._id).set({l:'l'});
  }
}
