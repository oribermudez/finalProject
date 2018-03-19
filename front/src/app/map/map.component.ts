import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  zoom = 11;
  lat = 19.3977933;
  lng = -99.173614;
  tickets;

  constructor(private ticketServ: TicketsService) { }

  ngOnInit() {
    this.ticketServ.getTickets()
    .subscribe(tickets => {
      this.tickets = tickets;
    });
  }

  onChoseMarker(event) {
    console.log(event);
  }

}