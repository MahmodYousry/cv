import { Component, input } from '@angular/core';

@Component({
  selector: 'app-progress-ring',
  standalone: true,
  template: `
    <div class="ring-card">
      <div class="ring" [style.--pct]="percent()">
        <span class="ring-value">{{ percent() }}%</span>
      </div>
      <span class="ring-label">{{ label() }}</span>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .ring-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      .ring {
        position: relative;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: conic-gradient(
          #005BB5 calc(var(--pct) * 3.6deg),
          #e8eef5 0
        );
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .ring-value {
        position: absolute;
        inset: 6px;
        border-radius: 50%;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.15rem;
        font-weight: 700;
        color: #005BB5;
      }
      .ring-label {
        margin-top: 0.75rem;
        font-size: 0.85rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #2d3748;
      }
    `,
  ],
})
export class ProgressRingComponent {
  label = input.required<string>();
  percent = input.required<number>();
}
