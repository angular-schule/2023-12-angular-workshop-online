import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { BookActions } from '../store/book.actions';
import { map } from 'rxjs';
import { selectBooks } from '../store/book.selectors';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  books: Book[] = [];

  // private rs2 = inject(BookRatingService);

  constructor(
    private rs: BookRatingService,
    private bs: BookStoreService,
    private store: Store
  ) {
    this.store.dispatch(BookActions.loadBooks());

    // Bitte AsyncPipe verwenden!
    this.store.select(selectBooks).subscribe(books => {
      this.books = books;
    });


    /*this.bs.getAll().subscribe(books => {
      this.books = books;
    });*/
  }

  doRateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.updateList(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

  doDelete(book: Book) {
    this.bs.delete(book.isbn).subscribe({
      next: () => {
        this.bs.getAll().subscribe(books => this.books = books);
        // this.books = this.books.filter(b => b.isbn !== book.isbn);
      },
      error: () => {}
    });
  }

  private updateList(ratedBook: Book) {
    // [1,2,3,4,5].map(e => e * 10) // [10, 20, 30, 40, 50] // Projektionsfunktion
    // [1,2,3,4,5,6,7,8,9,10].filter(e => e >= 5) // [5,6,7,8,9,10] // Prädikatsfunktion

    this.books = this.books.map(b => {
      if (ratedBook.isbn === b.isbn) {
        return ratedBook;
      } else {
        return b;
      }
    });
  }

}
