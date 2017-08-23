import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-wrapper',
  templateUrl: './box-wrapper.component.html',
  styleUrls: ['./box-wrapper.component.css']
})
export class BoxWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  boxClicked(event) {
    console.log(event);
  }

}
