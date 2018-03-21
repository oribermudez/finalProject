import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../services/tickets.service';
import { SessionService } from '../services/auth.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  tickets;
  user;
  constructor(private ticketServ: TicketsService, private session: SessionService) { }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(user => {
        this.user = user;
        console.log('zona', this.user.crew.zone);
        this.ticketServ.getZone(this.user.crew.zone)
          .subscribe(tickets => {
            this.tickets = tickets;
          });
      });
  }

  changeStatus(id) {
    console.log(id);
    this.ticketServ.editTicket(id)
    .subscribe(ticket => {
      console.log(ticket);
    });
  }
}
