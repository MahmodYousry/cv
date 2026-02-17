import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  template: `<h1 class="h1">{{ title() }}</h1>`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class SectionTitleComponent {
  title = input.required<string>();
}
