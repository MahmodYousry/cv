import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly profile: Profile = {
    name: 'Mahmoud Yousry',
    title: 'Full Stack Web Developer',
    birthDate: '1997-01-26',
    imageUrls: ['imgs/personal/me1.webp', 'imgs/personal/me2.webp'],
    resumePdfUrl: 'Mahmoud-elbaz.pdf',
    introParagraphs: [
      'I am a Full Stack Web Developer with extensive experience in both front-end and back-end technologies.',
    ],
    frontEndIntro: 'Proficient in HTML5, CSS3, Js, Ts, JQuery, Bootstrap, Media-Query, Sass, Angular, Rxjs and primeng.',
    backEndIntro: 'Skilled in Native PHP, MySQL Database, and the Laravel framework.',
    apiIntro: 'Strong background in API integration and JSON handling.',
    closingIntro: 'With a solid combination of these skills, I am capable of building powerful and unique web applications tailored to meet your needs.',
  };

  getProfile(): Profile {
    return this.profile;
  }
}
