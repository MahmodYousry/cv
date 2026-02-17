import { Component } from '@angular/core';
import { ContactService } from '../../core/services/contact.service';
import { AgePipe } from '../../shared/pipes/age.pipe';
import { ProfileService } from '../../core/services/profile.service';
import { Contact } from '../../core/models/contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [AgePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contact: Contact;
  birthDate: string;

  constructor(
    private contactService: ContactService,
    private profileService: ProfileService
  ) {
    this.contact = this.contactService.getContact();
    this.birthDate = this.profileService.getProfile().birthDate;
  }
}
