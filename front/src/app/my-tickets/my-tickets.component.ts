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
  ticket;
  constructor(private ticketServ: TicketsService, public toastr: ToastsManager) {}

  showWarning() {
    this.toastr.warning('Crew arrival: 40 mins', 'Alert!');
  }

  reviewed(ticket) {
      this.ticketServ.isReviewed(ticket, true)
      .subscribe(item => {
        console.log(item);
        this.ticketServ.userTickets()
        .subscribe(tickets => {
          this.tickets = tickets;
        });
      });
    }

    getId(ticket) {
      console.log(ticket);
      this.ticket = ticket;
      this.reviewed(this.ticket);
    }

    showToastr() {
      this.ticketServ.userTickets()
        .subscribe(tickets => {
          this.tickets = tickets;
          this.tickets.forEach(ticket => {
            if (ticket.status === 'On our way') {
              this.showWarning();
            }
          });
        });
    }

    ngOnInit() {
      $(document).ready(function() {
        ($('.modal') as any).modal();
      });
        this.ticketServ.userTickets()
        .subscribe(tickets => {
          this.tickets = tickets;
        });
  
        this.showToastr();
    }

}
