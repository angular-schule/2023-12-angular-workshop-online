import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    // Ersatz für den BookRatingService
    const ratingMock = {
      rateUp: (b: Book) => b,
      rateDown: (b: Book) => b,
    };

    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [
        // BRS ersetzen: Immer wenn jemand BRS anfordert,
        // liefere stattdessen ratingMock aus
        { provide: BookRatingService, useValue: ratingMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    // TS-Klasseninstanz
    component = fixture.componentInstance;

    // DOM-Element / Host-Element
    // fixture.nativeElement.querySelector('p')

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service.rateUp() for component.doRateUp()', () => {
    // Arrange
    // Service anfordern – das ist in Wahrheit aber unser ratingMock,
    // denn wir haben ja oben einen Provider dafür definiert
    const rs = TestBed.inject(BookRatingService);

    // Buch
    const testBook = { isbn: '123' } as Book;

    // ratingMock beobachten
    // spyOn(rs, 'rateUp').and.returnValue(testBook);
    // spyOn(rs, 'rateUp').and.callFake(b => b)
    // rateUp überwachen – die originale Methode wird aber trotzdem noch verwendet
    spyOn(rs, 'rateUp').and.callThrough();


    // Act
    component.doRateUp(testBook)

    // Assert
    // "Wurde die Methode aufgerufen?"
    // expect(rs.rateUp).toHaveBeenCalled()
    // expect(rs.rateUp).toHaveBeenCalledTimes(1)
    // expect(rs.rateUp).toHaveBeenCalledWith(testBook)
    expect(rs.rateUp).toHaveBeenCalledOnceWith(testBook)

  });
});
