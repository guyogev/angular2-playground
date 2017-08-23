import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWrapperComponent } from './box-wrapper.component';
import { BoxComponent } from '../box/box.component';

describe('BoxWrapperComponent', () => {
  let component: BoxWrapperComponent;
  let fixture: ComponentFixture<BoxWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxWrapperComponent, BoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
