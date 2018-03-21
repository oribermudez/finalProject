import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../services/tickets.service';
import { FileUploader } from 'ng2-file-upload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-ticket',
  templateUrl: './open-ticket.component.html',
  styleUrls: ['./open-ticket.component.css']
})
export class OpenTicketComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/api/tickets/new`
  });

  formData = new FormData();
  constructor(private ticketServ: TicketsService, private route: Router) { }

  ngOnInit() {
    ($('.button-collapse')as any).sideNav();
    ($('select') as any).material_select();
  }

  onSubmit(myForm) {
    console.log(myForm.value.services)
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('services', myForm.value.services);
    };
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = () => this.route.navigate(['profile']);

  }

}
