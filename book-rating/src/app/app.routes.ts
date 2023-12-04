import { Routes } from '@angular/router';
// import { booksRoutes } from './books/books.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.routes').then(m => m.booksRoutes)
  }
  // ...booksRoutes
];
