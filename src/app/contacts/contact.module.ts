import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactService } from './contact.service';
import { CONTACT_ROUTES } from './contact.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CONTACT_ROUTES)
  ],
  declarations: [
    ContactListComponent,
    ContactEditComponent,
    ContactViewComponent
  ],
  providers: [ContactService],
  exports: []
})
export class ContactModule { }
