import { Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { ProfileComponent } from '../profile/profile.component';
import { LoginComponent } from '../login/login.component';
import { OpenTicketComponent } from '../open-ticket/open-ticket.component';
import { ShowTicketsComponent } from '../show-tickets/show-tickets.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MyTicketsComponent } from '../my-tickets/my-tickets.component';
import { TechMapComponent } from '../tech-map/tech-map.component';
import { ScheduleComponent } from '../schedule/schedule.component';

export const routes: Routes = [
    {path: '',  component: LoginComponent},
    {path: 'mypage' , component: ProfileComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'newticket' , component: OpenTicketComponent},
    {path: 'mytickets' , component: MyTicketsComponent},
    {path: 'dashboard' , component: DashboardComponent},
    {path: 'tickets' , component: ShowTicketsComponent},
    {path: 'techmap' , component: TechMapComponent},
    {path: 'schedule' , component: ScheduleComponent}
];
