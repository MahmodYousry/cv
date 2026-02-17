import { Component } from '@angular/core';
import { HeroComponent } from './features/hero/hero.component';
import { ContactComponent } from './features/contact/contact.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { FooterComponent } from './features/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    ContactComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
  ],
  template: `
    <div class="container mt-5">
      <app-hero />
      <app-contact />
    </div>
    <app-skills />
    <app-projects />
    <app-footer />
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent { }
