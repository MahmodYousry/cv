import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly projects: Project[] = [
    {
      title: 'DANIELS Template 2023',
      imageUrl: 'imgs/projects-thumbs/daniels template.webp',
      imageAlt: 'DANIELS Template',
      features: ['Bootstrap 5', 'Font Awesome 6', 'Fully Responsive 100%', 'Easy To Customize', 'Clean And Fast'],
      previewUrl: 'https://mahmodyousry.github.io/bootstrap5Exam/',
    },
    {
      title: 'Bookmark Crud Operation - 2023',
      imageUrl: 'imgs/projects-thumbs/links-crud.webp',
      imageAlt: 'Bookmark CRUD',
      features: ['Bootstrap 5', 'Font Awesome 6 free', 'Fully Responsive 100%', 'LocalStorage Api', 'Clean And Fast', 'Well Commented'],
      previewUrl: 'https://mahmodyousry.github.io/js_bookmark_part3_9/',
    },
    {
      title: 'Weather App - 2023',
      imageUrl: 'imgs/projects-thumbs/weather api.webp',
      imageAlt: 'Weather App',
      features: ['Bootstrap 5', 'Font Awesome 6', 'Fully Responsive 100%', 'Weather Api Using JavaScript Native', 'Clean, Fast, Well Commented'],
      previewUrl: 'https://mahmodyousry.github.io/js_assinment_Api/',
    },
    {
      title: 'Js Vanilla Login System',
      imageUrl: 'imgs/projects-thumbs/js_login_system.webp',
      imageAlt: 'JS Login System',
      features: ['Bootstrap 5', 'Font Awesome 6 free', 'Fully Responsive 100%', 'Clean And Fast', 'Well Commented Code'],
      previewUrl: 'https://mahmodyousry.github.io/js_assinment_4/',
    },
    {
      title: 'Yummy Api Foods - 2023',
      imageUrl: 'imgs/projects-thumbs/yummy api foods.webp',
      imageAlt: 'Yummy API Foods',
      features: ['Bootstrap 5', 'Font Awesome 6 free', 'Fully Responsive 100%', 'Foods Api Using JavaScript', 'Clean, Fast, Well Commented'],
      previewUrl: 'https://mahmodyousry.github.io/js-my-exam/',
    },
    {
      title: '2019 - BCQ Responsive',
      imageUrl: 'imgs/projects-thumbs/bcq.webp',
      imageAlt: 'BCQ',
      description: 'ONE OF THE leading and specialized providers of technical and professional consultancy in the training and development of international quality systems in various fields and their classification according to international standards.',
      previewUrl: 'recent work/bcq/index.html',
    },
    {
      title: '2018 - 2019 Responsive',
      imageUrl: 'imgs/projects-thumbs/ontario.webp',
      imageAlt: 'Ontario',
      description: 'one of my psd that i have convert it to a full responsive html web page',
      previewUrl: 'recent work/ontario bar prep/index.html',
    },
    {
      title: 'Viral agancy done in 2019 - 2020',
      imageUrl: 'imgs/projects-thumbs/hodapro-corp.webp',
      imageAlt: 'Viral agency',
      features: ['Bootstrap 4', 'Font Awesome 4', 'Fully Responsive 100%', 'Easy To Customize', 'Clean And Fast'],
      previewUrl: 'https://mahmodyousry.github.io/Web-Page-Design/',
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
