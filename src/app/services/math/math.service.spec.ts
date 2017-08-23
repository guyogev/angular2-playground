import { TestBed, inject } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathService]
    });
  });

  it('should be created', inject([MathService], (service: MathService) => {
    expect(service).toBeTruthy();
  }));

  let service: MathService;
  beforeEach(() => { service = new MathService(); });

  describe('add', () => {
    it('should add', () => {
      expect(service.add(1, 2)).toBe(3);
    });
  });
});
