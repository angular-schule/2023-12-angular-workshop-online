import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


/////////


export class Customer<T = string> {
  /*private id: number;

  constructor(id: number) {
    this.id = id;
  }*/

  // Constructor Shorthand
  // constructor(private id: number) {}
  constructor(private id: T) {}

  fooBar(arg: T): number {
    // Callback
    setTimeout(() => {
      console.log('Die ID ist', this.id);
    }, 2000);

    return 5;
  }
}


export const myCustomer = new Customer(4);
myCustomer.fooBar('');





export function foo (arg) {
  return arg + 1;
}

const result = foo1(5);

// Lambda-Ausdruck
const foo2 = arg => arg + 1;
