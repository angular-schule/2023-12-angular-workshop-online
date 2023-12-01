import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  // ISBN aus der URL
  // HTTP
  // Anzeige
}
