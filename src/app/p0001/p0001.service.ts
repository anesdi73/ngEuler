import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class P0001Service {
  calculate(upperLimit): number {
    let result = 0;
    for (let i = 0; i < upperLimit; i++) {
      if (this.isMultiple(i)) {
        result = result + i;
      }
    }

    return result;
  }
  private isMultiple(i: number): boolean {
    return i % 5 === 0 || i % 3 === 0;
  }

  constructor() {}
}
