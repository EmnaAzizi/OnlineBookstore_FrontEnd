import { TestBed, inject } from '@angular/core/testing';

import { ProductdataService } from './productdata.service';

describe('ProductdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductdataService]
    });
  });

  it('should be created', inject([ProductdataService], (service: ProductdataService) => {
    expect(service).toBeTruthy();
  }));
});
