import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../shared/book';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, RatingComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  // hier dürfen Daten von der Elternkomponente hineinfließen
  @Input() book?: Book;
}
