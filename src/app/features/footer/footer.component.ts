import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <div class="footer">
      <p class="text-center mb-0">
        Built with
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" class="heart"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 2.514 3.279c0 2.21 2.216 4.063 4.486 4.063 2.27 0 4.486-1.853 4.486-4.063 0-2.401-3.086-2.998-4.813-2.998L8 2.748z"/></svg>
        Mahmoud Yousry
      </p>
    </div>
  `,
  styles: [
    `
      .heart { color: red; }
    `,
  ],
})
export class FooterComponent {}
