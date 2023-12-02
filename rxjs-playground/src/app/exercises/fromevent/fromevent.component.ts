import { Component } from '@angular/core';
import { fromEvent, map, startWith, debounceTime } from 'rxjs';

type ResizeEvent = { target: Window };

@Component({
  templateUrl: './fromevent.component.html',
  standalone: true
})
export class FromeventComponent {

  currentWidth?: number;

  constructor() {
    /**
     * Schreibe die jeweils aktuelle Fensterbreite in das Property `this.currentWidth`
     *
     * Nutze fromEvent, um das resize-Event auf window zu abonnieren.
     * Initialisiere das Observable mit der aktuellen Fensterbreite (`window.innerWidth`)
     * Entprelle den Eventstrom, damit nicht zu viele Events gefeuert werden.
     */

    /******************************/

    fromEvent<ResizeEvent>(window, 'resize').subscribe(e => {
      console.log(e);
    });

    /******************************/
  }

}
