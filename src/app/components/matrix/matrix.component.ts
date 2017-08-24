import { Component, OnInit } from '@angular/core';
import { MatrixService } from '../../services/matrix/matrix.service';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {

  constructor(private _matrix_service: MatrixService) { }

  range(n) { return Array.from({length: n}, (value, key) => key); }
  ngOnInit() { }
}
