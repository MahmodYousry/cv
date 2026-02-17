import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly contact: Contact = {
    address: '13 ,Alexandria, Elmaraghy Khorshed',
    email: 'hguhfdsa@gmail.com',
    phone: '012 021 6363 9',
    websiteUrl: 'https://mahmodyousry.github.io/cv/',
    websiteLabel: 'Mahmoud Yousry',
    nationality: 'Egyptian',
    socialLinks: [
      {
        label: 'Facebook',
        url: 'https://www.facebook.com/Mahmod.yousry/',
        icon: 'facebook',
        ariaLabel: 'facebook link',
      },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mahmoudyousrypro/',
        icon: 'linkedin',
        ariaLabel: 'linkedin link',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/mahmodyousry',
        icon: 'github',
        ariaLabel: 'github link',
      },
    ],
  };

  getContact(): Contact {
    return this.contact;
  }
}
