import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TicketsService {
  options = {withCredentials: true};

  constructor(private http: Http) { }

  multipleUpload(formdata) {
    return this.http.post('http://localhost:3000/api/tickets/new', formdata)
    .map((res: Response) => res.json())
    .map(info => info)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

  getTickets(): Observable<any> {
    return this.http.get(`http://localhost:3000/api/tickets`)
    .map((res: Response) => res.json())
    .map(tickets => tickets)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

  editTicket(id): Observable<any> {
    return this.http.patch(`http://localhost:3000/api/tickets/edit/${id}`, {})
    .map((res: Response) => res.json())
    .map(tickets => tickets)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

  userTickets() {
    return this.http.get(`http://localhost:3000/api/tickets/mytickets`, this.options)
    .map((res: Response) => res.json())
    .map(tickets => tickets)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

  getZone(zone) {
    return this.http.get(`http://localhost:3000/api/tickets/zone/${zone}`, this.options)
    .map((res: Response) => res.json())
    .map(tickets => tickets)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

}
