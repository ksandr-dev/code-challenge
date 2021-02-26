import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html'
})
export class ContactViewComponent implements OnInit {
  recordId: string;
  contact: Contact = {
    recordId: '',
    email: '',
    firstName: '',
    lastName: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.recordId)
      )
      .subscribe(recordId => {
        this.contactService.findById(recordId)
        .then(response => {
          this.contact = response;
        })
        .catch(error => {
          console.log(error.response);
        });
      });
  }

  back() {
    this.router.navigate(['/contacts']);
  }
}
