import { Component } from '@angular/core';
import { ProjectsService } from '../../core/services/projects.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[];

  constructor(private projectsService: ProjectsService) {
    this.projects = this.projectsService.getProjects();
  }
}
