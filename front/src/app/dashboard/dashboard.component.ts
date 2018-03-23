import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id = 'chart1';
  width = 600;
  height = 400;
  type = 'column2d';
  dataFormat = 'json';
  dataSource;

  id2 = '';
  width2 = 600;
  height2 = 400;
  type2 = 'pie3d';
  datasource2 = 'json';
  myDataSource;
  
  constructor() {
    this.dataSource = {
      'chart': {
          'caption': 'Tickets per day',
          'subCaption': 'Number of tickets generated in the last 5 days',
          'theme': 'fint'
      },

      'data': [
          {
              'label': '17 Marzo 2018',
              'value': '16'
          },
          {
              'label': '18 Marzo 2018',
              'value': '10'
          },
          {
              'label': '19 Marzo 2018',
              'value': '14'
          },
          {
              'label': '20 Marzo 2018',
              'value': '8'
          },
          {
              'label': '21 Marzo 2018',
              'value': '19'
          }
      ]
  };

  this.myDataSource = {
    'chart': {
        'caption': 'Outages per zone',
        'subcaption': 'This month',
        'startingangle': '120',
        'showlabels': '0',
        'showlegend': '1',
        'enablemultislicing': '0',
        'slicingdistance': '15',
        'showpercentvalues': '1',
        'showpercentintooltip': '0',
        'plottooltext': 'Zone : $label Tickets : $datavalue',
        'theme': 'fint'
    },
    'data': [
        {
            'label': 'Polanco',
            'value': '8'
        },
        {
            'label': 'Reforma',
            'value': '4'
        },
        {
            'label': 'Narvarte',
            'value': '5'
        },
        {
            'label': 'Condesa, Nápoles',
            'value': '10'
        },
        {
            'label': 'Coyoacan',
            'value': '2'
        }
    ]
};

}

  ngOnInit() {
  }

}
