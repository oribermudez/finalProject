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

  manageFile(e) {
    this.formData.append(e.target.files[0].name, e.target.files[0]);
    console.log(e.target.files[0]);
  }

  onSubmit(form) {
    console.log('form value', form.value);
    const keys = Object.keys(form.value);
    for (let key of keys) {
      this.formData.append(key, form.value);
    }
    console.log('formData', this.formData);
    (this.ticketServ.multipleUpload(this.formData) as any).subscribe (res => console.log(res));
  }

}
