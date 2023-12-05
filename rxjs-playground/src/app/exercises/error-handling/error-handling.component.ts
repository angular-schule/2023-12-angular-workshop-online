import { Component } from '@angular/core';
import { ReplaySubject, throwError, of, EMPTY, retry, catchError, timer, Observable } from 'rxjs';

import { ExerciseService } from '../exercise.service';
import { HistoryComponent } from '../../shared/history/history.component';

@Component({
  templateUrl: './error-handling.component.html',
  standalone: true,
  imports: [HistoryComponent]
})
export class ErrorHandlingComponent {

  logStream$ = new ReplaySubject<unknown>();

  constructor(private es: ExerciseService) { }

  /**
   * Das Observable aus `this.es.randomError()` liefert mit hoher Wahrscheinlichkeit einen Fehler.
   * Probiere verschiedene Strategien aus, um den Fehler zu behandeln.
   */

  start() {
    this.es.randomError().pipe(
      catchError(err => {
        // Fehler ignorieren
        // return new Observable(sub => sub.complete());
        // return of();
        return EMPTY;

        // Fehler weiterwerfen
        // return new Observable(sub => sub.error('BÖSER FEHLER!'));
        // return throwError(() => 'BÖSER FEHLER!');
        // throw 'HALLO WELT! FEHLER!';

        // Fehler ersetzen
        // return of('Hallo', 'Welt', 'nichts passiert!');
      })
    ).subscribe({
      next: e => this.logStream$.next(e),
      error: err => this.logStream$.next('❌ ERROR: ' + err)
    });
  }
}
