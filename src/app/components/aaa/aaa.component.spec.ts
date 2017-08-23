import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaaComponent } from './aaa.component';
import { BoxComponent } from '../box/box.component';

describe('AaaComponent', () => {
  let component: AaaComponent;
  let fixture: ComponentFixture<AaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaaComponent, BoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('addA', () => {
    it('should be defined', () => expect(component.addA).toBeTruthy());
    it('should add A', () => {
      expect(component.addA('BBB')).toEqual('AAABBBAAA');
    });
  });

  it('should render', async(() => {
    fixture = TestBed.createComponent(AaaComponent);
    component = fixture.componentInstance;
    component.str = '';
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('AAAAAA');
    component.str = 'bbb';
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('AAAbbbAAA');
  }));

});
