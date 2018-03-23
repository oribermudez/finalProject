import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
  baseURL = environment.baseURL + 'api/users';
  constructor(private http: Http) { }

  editUser(user, status): Observable<any> {
    return this.http.patch(this.baseURL + `/edit/${user._id}`, {status: status})
    .map((res: Response) => res.json())
    .map(tickets => tickets)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

}
