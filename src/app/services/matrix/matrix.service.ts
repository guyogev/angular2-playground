import { Injectable } from '@angular/core';

@Injectable()
export class MatrixService {
  size: Number;
  column: Number;
  row: Number;
  mx: Array<Array<Number>>;

  constructor() {
    this.size = 4;
    this.column = 0;
    this.row = 0;
  }

  selectedCell(row, column) {
    return this.row === row && this.column === column;
  }


}
