import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-open-ticket',
  templateUrl: './open-ticket.component.html',
  styleUrls: ['./open-ticket.component.css']
})
export class OpenTicketComponent implements OnInit {
  formData = new FormData();
  constructor(private ticketServ: TicketsService) { }

  ngOnInit() {
    ($('.button-collapse')as any).sideNav();
    ($('select') as any).material_select();
  }

  onSubmit(form) {
    console.log(form.value);
    const keys = Object.keys(form.value);
    for (let key of keys) {
      this.formData.append(key, form.value);
    }
    this.ticketServ.multipleUpload(this.formData)
  }

  manageFile(e) {
    for (let file of e.target.files) {
    this.formData.append(e.target.name, file);
    }
    console.log(e.target.files[0]);
  }

}
