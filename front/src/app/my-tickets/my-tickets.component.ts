import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TicketsService } from '../services/tickets.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit {
  tickets;
  constructor(private ticketServ: TicketsService, public toastr: ToastsManager) {}

  showWarning() {
    this.toastr.warning('Crew arrival: 40 mins', 'Alert!');
  }

  ngOnInit() {
      this.ticketServ.userTickets()
      .subscribe(tickets => {
        this.tickets = tickets;
      });

     
  }


}
