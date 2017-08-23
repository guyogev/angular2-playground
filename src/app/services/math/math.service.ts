import { Injectable } from '@angular/core';

@Injectable()
export class MathService {

  constructor() { }
  add(x, y) {
    return x + y;
  }
}
