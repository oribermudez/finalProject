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
        console.log(this.user);
      });

    this.ticketServ.getZone(4)
    .subscribe(tickets => {
      this.tickets = tickets;
    });
  }
  

}
