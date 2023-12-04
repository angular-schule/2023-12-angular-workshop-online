import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.scss'
})
export class BookCreateComponent {
  bookForm = new FormGroup({
    isbn: new FormControl('', { nonNullable: true }),
    title: new FormControl('', { nonNullable: true }),
    description: new FormControl('', { nonNullable: true }),
    price: new FormControl(0, { nonNullable: true }),
    rating: new FormControl(1, { nonNullable: true }),
  });
}

/*
TODO
- Validierung
- Meldungen
  - "Die ISBN ist ungültig"
  - "Die ISBN ist zu kurz"
- Submit-Button
- Formular abschicken
- HTTP Buch anlegen
- bei Erfolg:
  - Navigation zur Detailseite
  - Erfolgsnachricht
  - zurücksetzen
