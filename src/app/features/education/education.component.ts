import { Component } from '@angular/core';
import { EducationService } from '../../core/services/education.service';
import { Education } from '../../core/models/education.model';
import { Course } from '../../core/models/education.model';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  education: Education;
  courses: Course[];

  constructor(private educationService: EducationService) {
    this.education = this.educationService.getEducation();
    this.courses = this.educationService.getCourses();
  }
}
