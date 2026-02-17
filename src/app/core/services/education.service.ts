import { Injectable } from '@angular/core';
import { Education, Course } from '../models/education.model';

@Injectable({ providedIn: 'root' })
export class EducationService {
  private readonly education: Education = {
    items: ['Bachelor of Laws from Alexandria University'],
  };

  private readonly courses: Course[] = [
    {
      title: 'Route Academy - 6 - month Diploma 12/3/2023 - 16/9/2023',
      description: 'Front End Web Development (Angular framework track)',
    },
    {
      title: 'Angular Advanced Course - Diploma 18/6/2024 - 25/12/2024',
    },
    {
      title: 'Laravel For Absolute Beginners 2024',
      description: 'Udemy Course',
      certificationUrl: 'files/Laravel For Absolute Beginners 2024/UC-862a995a-76db-491b-8747-ee7854bdb6a2.pdf',
    },
    {
      title: 'Laravel 11 Updates - The Complete Guide',
      description: 'Udemy Course',
      certificationUrl: 'files/Laravel 11 Updates - The Complete Guide.pdf',
    },
    {
      title: 'Laravel Jetstream and Fortify',
      description: 'Udemy Course',
      certificationUrl: 'files/laravel jetstream and fortify.pdf',
    },
    {
      title: 'Laravel RESTFUL APIs',
      description: 'Udemy Course',
      certificationUrl: 'files/laravel restful apis.pdf',
    },
    {
      title: 'The Complete Livewire Course 2024 From Zero to hero!',
      description: 'Udemy Course',
      certificationUrl: 'files/Laravel Livewire/UC-84448f61-00ef-4a63-859d-822696295dfd.pdf',
    },
    {
      title: 'Laravel Socialite - The Complete Guide',
      description: 'Udemy Course',
      certificationUrl: 'files/Laravel Socialite - The Complete Guide.pdf',
    },
    {
      title: 'Laravel Telescope for Absolute Beginners',
      description: 'Udemy Course',
      certificationUrl: 'files/Laravel Telescope for Absolute Beginners.pdf',
    },
  ];

  getEducation(): Education {
    return this.education;
  }

  getCourses(): Course[] {
    return this.courses;
  }
}
