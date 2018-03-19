import { Component, OnInit } from '@angular/core';
import {SessionService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser = {email: '', password: ''};
  user;

  constructor(private session: SessionService, private route: Router) { }

  login() {
    this.session.login(this.newUser)
    .subscribe(data => {
      this.user = data;
      localStorage.setItem('user', JSON.stringify(data));
      this.route.navigate(['mypage']);
    });
  }

  ngOnInit() {
    $(document).ready(function() {
      ($('.parallax') as any).parallax();
    });

    if (!localStorage.getItem('user')) { return; }
     this.user = JSON.parse(localStorage.getItem('user'));
     this.route.navigate(['mypage']);
  }

}
