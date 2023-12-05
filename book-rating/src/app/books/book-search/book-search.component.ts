import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.scss'
})
export class BookSearchComponent {
  searchControl = new FormControl('', { nonNullable: true });

  constructor() {
    this.searchControl.valueChanges.subscribe(e => {
      console.log(e);
    });
  }
}
