import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/';

@Injectable()
export class SessionService {
  options = {withCredentials: true};
  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`http://localhost:3000/api/auth/signup`, user, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`http://localhost:3000/api/auth/login`, user, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`http://localhost:3000/api/auth/logout`, {})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/api/auth/loggedin`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getPrivateData() {
    return this.http.get(`http://localhost:3000/api/auth/private`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }
}