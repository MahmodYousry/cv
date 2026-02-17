import { Component } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';
import { Profile } from '../../core/models/profile.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  profile: Profile;

  constructor(private profileService: ProfileService) {
    this.profile = this.profileService.getProfile();
  }
}
