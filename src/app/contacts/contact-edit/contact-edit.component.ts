import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
import { of } from 'rxjs';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html'
})
export class ContactEditComponent implements OnInit {
  recordId: string;
  contact: Contact;
  feedback: any = {};

  constructor(
    private router: Router,
    private contactService: ContactService) {
  }

  ngOnInit() {
    of(new Contact())
    .subscribe(contact => {
      this.contact = contact;
    });
  }

  save() {
    this.contactService.save(this.contact)
    .then(response => {
      this.feedback = {type: 'success', message: 'Save was successful!'};
      setTimeout(() => {
        this.router.navigate(['/contacts']);
      }, 1000);
    })
    .catch(error => {
      this.feedback = {type: 'warning', message: 'Error saving'};
    });
  }

  cancel() {
    this.router.navigate(['/contacts']);
  }
}
