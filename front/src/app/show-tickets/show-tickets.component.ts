import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../services/tickets.service';


@Component({
  selector: 'app-show-tickets',
  templateUrl: './show-tickets.component.html',
  styleUrls: ['./show-tickets.component.css']
})
export class ShowTicketsComponent implements OnInit {
  tickets;
  zone1;
  zone2;
  zone3;
  zone4;
  zone5;
  constructor(private ticketServ: TicketsService) { }

  ngOnInit() {
    ($('.collapsible') as any).collapsible();

    this.ticketServ.getTickets()
      .subscribe(tickets => {
        this.tickets = tickets;
      });

    this.ticketServ.getZone(1)
    .subscribe(tickets1 => {
      this.zone1 = tickets1;
    });

    this.ticketServ.getZone(2)
    .subscribe(tickets2 => {
      this.zone2 = tickets2;
    });

    this.ticketServ.getZone(3)
    .subscribe(tickets3 => {
      this.zone3 = tickets3;
    });

    this.ticketServ.getZone(4)
    .subscribe(tickets4 => {
      this.zone4 = tickets4;
    });

    this.ticketServ.getZone(5)
    .subscribe(tickets5 => {
      this.zone5 = tickets5;
    });
  }

}
