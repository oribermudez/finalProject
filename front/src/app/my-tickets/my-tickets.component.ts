import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit {
  tickets;
  constructor(private ticketServ: TicketsService) { }

  ngOnInit() {
      this.ticketServ.userTickets()
      .subscribe(tickets => {
        this.tickets = tickets;
      });
  }

}
