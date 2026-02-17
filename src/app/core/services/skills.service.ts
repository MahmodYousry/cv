import { Injectable } from '@angular/core';
import { Skill, SoftSkill } from '../models/skill.model';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  private readonly skills: Skill[] = [
    { name: 'Html5' },
    { name: 'Css3' },
    { name: 'Javascript' },
    { name: 'Typescript' },
    { name: 'Jquery' },
    { name: 'Ajax' },
    { name: 'JSON' },
    { name: 'Bootstrap' },
    { name: 'Sass' },
    { name: 'Angular' },
    { name: 'Git & Github' },
    { name: 'PHP' },
    { name: 'MySQL' },
    { name: 'Laravel' },
    { name: 'Jetstream' },
    { name: 'Fortify' },
    { name: 'RESTFUL APIs' },
    { name: 'Livewire' },
  ];

  private readonly softSkills: SoftSkill[] = [
    { label: 'english', percent: 90 },
    { label: 'Responsive', percent: 100 },
    { label: 'Creativity', percent: 70 },
  ];

  getSkills(): Skill[] {
    return this.skills;
  }

  getSoftSkills(): SoftSkill[] {
    return this.softSkills;
  }
}
