import { Component } from '@angular/core';
import { SkillsService } from '../../core/services/skills.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { SkillBadgeComponent } from '../../shared/components/skill-badge/skill-badge.component';
import { ProgressRingComponent } from '../../shared/components/progress-ring/progress-ring.component';
import { EducationComponent } from '../education/education.component';
import { Skill, SoftSkill } from '../../core/models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionTitleComponent, SkillBadgeComponent, ProgressRingComponent, EducationComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills: Skill[];
  softSkills: SoftSkill[];

  constructor(private skillsService: SkillsService) {
    this.skills = this.skillsService.getSkills();
    this.softSkills = this.skillsService.getSoftSkills();
  }
}
