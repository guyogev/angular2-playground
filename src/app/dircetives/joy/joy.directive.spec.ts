import { JoyDirective } from './joy.directive';
import { ElementRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestComponent } from '../../mocks/test_comp';
import { By } from '@angular/platform-browser';

fdescribe('JoyDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let compiled;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, JoyDirective]
    });
    TestBed.overrideComponent(TestComponent, {
      set: {
        template: '<div appJoy></div>'
      }
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.query(By.directive(JoyDirective));
  });

  it('hovering over input', () => {
    compiled.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(compiled.nativeElement.style.backgroundColor).toBe('yellow');

    compiled.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(compiled.nativeElement.style.backgroundColor).toBe('inherit');
  });
});
