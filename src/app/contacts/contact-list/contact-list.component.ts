import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact-list.component.html'
})
export class ContactListComponent implements OnInit {
  constructor(private contactService: ContactService) {
  }

  get contactList(): Contact[] {
    return this.contactService.contactList;
  }

  ngOnInit() {
    this.contactService.load();
  }
}
