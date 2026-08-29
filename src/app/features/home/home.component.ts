import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ContactComponent } from '../contact/contact.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
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
    <div id="projects">
      <app-projects />
    </div>
    <app-footer />
  `,
})
export class HomeComponent {}
