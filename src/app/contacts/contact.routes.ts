import { Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

export const CONTACT_ROUTES: Routes = [
  {
    path: 'contacts',
    component: ContactListComponent
  },
  {
    path: 'contacts/new',
    component: ContactEditComponent
  },
  {
    path: 'contacts/view/:recordId',
    component: ContactViewComponent
  }
];
