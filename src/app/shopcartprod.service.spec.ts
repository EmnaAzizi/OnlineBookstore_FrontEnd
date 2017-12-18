import { TestBed, inject } from '@angular/core/testing';

import { ShopcartprodService } from './shopcartprod.service';

describe('ShopcartprodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopcartprodService]
    });
  });

  it('should be created', inject([ShopcartprodService], (service: ShopcartprodService) => {
    expect(service).toBeTruthy();
  }));
});
