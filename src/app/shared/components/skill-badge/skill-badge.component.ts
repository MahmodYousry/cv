import { Component, input } from '@angular/core';

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  template: `<span class="badge">{{ name() }}</span>`,
  styles: [
    `
      :host {
        display: inline-block;
      }
      .badge {
        display: inline-block;
        background: #005BB5;
        color: #fff;
        font-size: 0.8rem;
        font-weight: 500;
        padding: 0.45rem 0.85rem;
        border-radius: 20px;
        white-space: nowrap;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
      }
      .badge:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 91, 181, 0.35);
      }
    `,
  ],
})
export class SkillBadgeComponent {
  name = input.required<string>();
}
