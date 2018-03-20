import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { FusionChartsModule } from 'angular2-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { AgmCoreModule } from '@agm/core';
import * as $ from 'jquery';

// Services
import {SessionService} from './services/auth.service';
import { TicketsService } from './services/tickets.service';
import {FirebaseService} from './services/firebase.service';

// Routes
import { routes } from './routes/app.routing';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { OpenTicketComponent } from './open-ticket/open-ticket.component';
import { ShowTicketsComponent } from './show-tickets/show-tickets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { ManagersNavComponent } from './managers-nav/managers-nav.component';
import { MapComponent } from './map/map.component';
import { TechMapComponent } from './tech-map/tech-map.component';
import { TechNavComponent } from './tech-nav/tech-nav.component';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    OpenTicketComponent,
    ShowTicketsComponent,
    DashboardComponent,
    UserNavComponent,
    MyTicketsComponent,
    ManagersNavComponent,
    MapComponent,
    TechMapComponent,
    TechNavComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme),
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWwhYJ8MBRN6YfD0VesqiDn1FIzEOT3O0'
    })
  ],
  providers: [SessionService, TicketsService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
