import { TestBed, inject } from '@angular/core/testing';

import { ShopprodService } from './shopprod.service';

describe('ShopprodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopprodService]
    });
  });

  it('should be created', inject([ShopprodService], (service: ShopprodService) => {
    expect(service).toBeTruthy();
  }));
});
