import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.scss'
})
export class BookCreateComponent {
  bookForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(80)
      ]
    }),
    description: new FormControl('', { nonNullable: true }),
    price: new FormControl(0, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(0)
      ]
    }),
    rating: new FormControl(1, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(1),
        Validators.max(5),

      ]
    }),
  });

  constructor(private bs: BookStoreService, private router: Router) {}

  isInvalid(controlName: string): boolean {
    const control = this.bookForm.get(controlName);

    if (!control) {
      return false;
    }

    return control.touched && control.invalid;
  }

  hasError(controlName: string, errorCode: string): boolean {
    // "Besitzt das Control Y den Fehler X?"
    const control = this.bookForm.get(controlName);

    if (!control) {
      return false;
    }

    return control.hasError(errorCode) && control.touched;
    // return !!control.errors?.['minlength'] && control.touched;
    // return !!control.getError(errorCode)
    // return this.bookForm.hasError(errorCode, controlName);
  }

  submitForm() {
    if (this.bookForm.invalid) {
      return;
    }

    const newBook: Book = this.bookForm.getRawValue();

    this.bs.create(newBook).subscribe(receivedBook => {
      this.router.navigate(['/books', receivedBook.isbn]);
    });
  }
}
