import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../services/tickets.service';
import { SessionService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
  });
  tickets;
  user = {name:  '', crew: { zone: ''}};
  TICKET;
  constructor(private ticketServ: TicketsService, private session: SessionService) { }

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(user => {
        this.user = user;
        console.log('zona', this.user.crew.zone);
        this.ticketServ.techTickets(this.user.crew.zone)
          .subscribe(tickets => {
            this.tickets = tickets;
          });
      });

    $(document).ready(function() {
      ($('.modal') as any).modal();
    });
  }

  changeStatus(ticket) {
    this.ticketServ.editTicket(ticket, 'On our way')
    .subscribe(item => {
      console.log(item);
      this.ticketServ.techTickets(this.user.crew.zone)
          .subscribe(tickets => {
            this.tickets = tickets;
          });
    });
  }

  arrivedLocation(ticket) {
    this.ticketServ.editTicket(ticket, 'Resolving')
    .subscribe(item => {
      console.log(item);
      this.ticketServ.techTickets(this.user.crew.zone)
          .subscribe(tickets => {
            this.tickets = tickets;
          });
    });
  }

  solvedTicket(ticket) {
    this.ticketServ.editTicket(ticket, 'Solved')
    .subscribe(item => {
      console.log(item);
      this.ticketServ.techTickets(this.user.crew.zone)
          .subscribe(tickets => {
            this.tickets = tickets;
          });
    });
  }

  modifyTicket() {
    console.log(this.TICKET);
    this.uploader.uploadAll();

    this.uploader.onCompleteItem = () => {
        this.ticketServ.techTickets(this.user.crew.zone)
            .subscribe(tickets => {
              this.tickets = tickets;
            });
    };
  }

  getID(ticket) {
    console.log(ticket);
    this.TICKET = ticket;
    this.uploader.options.url = `http://localhost:3000/api/tickets/editpic/${ticket._id}`;

  }
}
