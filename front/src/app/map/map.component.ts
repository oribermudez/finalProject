import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TicketsService } from '../services/tickets.service';
import {FirebaseService} from '../services/firebase.service';
import firebase from '../services/firebase.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Output() markerSelect = new EventEmitter<any>();

  zoom = 12;
  lat = 19.3977933;
  lng = -99.173614;
  tickets;
  techs = [];
  target;
  
  constructor(private ticketServ: TicketsService) { }

  ngOnInit() {
    firebase.database().ref('techs').on('child_added', (snap) => {
      const tech = snap.val();
      tech['key'] = snap.key;
      tech['lat'] = tech.location[0];
      tech['lng'] = tech.location[1];
      this.techs.push(tech);
      console.log('snap', snap.val());
      console.log('techs array', this.techs);
    });

    firebase.database().ref('techs').on('child_removed', (snap) => {
      this.techs.push(snap.key);
      this.techs = this.techs.filter(t => t.key !== snap.key);
    });


    this.ticketServ.getTickets()
    .subscribe(tickets => {
      this.tickets = tickets;
    });
  }

  onChoseMarker(ticket) {
    this.target = ticket;
    this.markerSelect.emit(this.target);
    console.log('Hijo: ', this.target);
  }


}