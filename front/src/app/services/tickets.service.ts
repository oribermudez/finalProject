import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';

@Injectable()
export class TicketsService {
  options = {withCredentials: true};
  baseURL = environment.baseURL + 'api/tickets';
  constructor(private http: Http) { }

  multipleUpload(formdata) {
    return this.http.post(this.baseURL + '/new', formdata)
    .map((res: Response) => res.json())
    .map(info => info)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

  getTickets(): Observable<any> {
    return this.http.get(this.baseURL)
    .map((res: Response) => res.json())
    .map(tickets => tickets)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

  editTicket(item, status): Observable<any> {
    return this.http.patch(this.baseURL + `/edit/${item._id}`, {status: status})
    .map((res: Response) => res.json())
    .map(tickets => tickets)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

  ticketProof(item, status): Observable<any> {
    return this.http.patch(this.baseURL + `/editpic/${item._id}`, {status: status})
    .map((res: Response) => res.json())
    .map(tickets => tickets)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

  userTickets() {
    return this.http.get(this.baseURL + `/mytickets`, this.options)
    .map((res: Response) => res.json())
    .map(tickets => tickets)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

  getZone(zone) {
    return this.http.get(this.baseURL + `/zone/${zone}`, this.options)
    .map((res: Response) => res.json())
    .map(tickets => tickets)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

  techTickets(zone) {
    return this.http.get(this.baseURL + `/techtickets/${zone}`, this.options)
    .map((res: Response) => res.json())
    .map(tickets => tickets)
    .catch(e => {
      console.log(e);
      return Observable.throw(e);
    });
  }

}
