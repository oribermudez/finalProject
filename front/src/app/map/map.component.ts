import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../services/tickets.service';
import {FirebaseService} from '../services/firebase.service';
import firebase from '../services/firebase.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  zoom = 12;
  lat = 19.3977933;
  lng = -99.173614;
  tickets;
  techs = [];
  
  constructor(private ticketServ: TicketsService) { }

  ngOnInit() {
    firebase.database().ref('techs').on('child_added', (snap) => {
      this.techs.push(snap.val());
      console.log('techs array', this.techs)
    });


    this.ticketServ.getTickets()
    .subscribe(tickets => {
      this.tickets = tickets;
    });
  }

  onChoseMarker(event) {
    console.log(event);
  }

}