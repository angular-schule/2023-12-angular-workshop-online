import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  template: `@for (_ of getStars(); track _) {⭐️}`,
})
export class RatingComponent {
  @Input() value?: number;

  getStars() {
    return new Array(this.value || 0);
  }
}
