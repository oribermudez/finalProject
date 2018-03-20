import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';
import firebase from '../services/firebase.service';

@Component({
  selector: 'app-tech-map',
  templateUrl: './tech-map.component.html',
  styleUrls: ['./tech-map.component.css']
})
export class TechMapComponent implements OnInit {
  zoom = 16;
  lat;
  lng;
  key;
  user;
  constructor(private session: SessionService) { }

  ngOnInit() {
    this.getUserLocation();
    this.session.isLoggedIn()
      .subscribe(user => {
        this.user = user;
        console.log(user);
      });
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        // .push crea un dato con nuevo id
        firebase.database().ref(this.user._id).push({ user: localStorage.getItem('user'), location: [this.lat, this.lng]})
          .then(snap => {
            this.key = snap.key;
            firebase.database().ref(this.user._id).child(this.key).set({ user: JSON.parse(localStorage.getItem('user')), location: [this.lat, this.lng]});
          });
      });
    }
  }

}
