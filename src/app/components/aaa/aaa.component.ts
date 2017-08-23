import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aaa',
  templateUrl: './aaa.component.html',
  styleUrls: ['./aaa.component.css']
})
export class AaaComponent implements OnInit {
  @Input() str;
  constructor() { }

  ngOnInit() {
  }

  addA(str) {
    return `AAA${str}AAA`;
  }

}
