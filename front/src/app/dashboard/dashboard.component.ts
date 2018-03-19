import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id = 'chart1';
  width = 375;
  height = 400;
  type = 'column2d';
  dataFormat = 'json';
  dataSource;
  
  constructor() {
    this.dataSource = {
      "chart": {
          "caption": "Tickets per day",
          "subCaption": "Number of tickets generated in the last 5 days",
          "theme": "fint"
      },
      "data": [
          {
              "label": "Bakersfield Central",
              "value": "880000"
          },
          {
              "label": "Garden Groove harbour",
              "value": "730000"
          },
          {
              "label": "Los Angeles Topanga",
              "value": "590000"
          },
          {
              "label": "Compton-Rancho Dom",
              "value": "520000"
          },
          {
              "label": "Daly City Serramonte",
              "value": "330000"
          }
      ]
  };
}

  ngOnInit() {
  }

}
