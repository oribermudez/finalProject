import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-map',
  templateUrl: './tech-map.component.html',
  styleUrls: ['./tech-map.component.css']
})
export class TechMapComponent implements OnInit {
  zoom = 16;
  lat;
  lng;
  constructor() { }

  ngOnInit() {
    this.getUserLocation();
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

}
