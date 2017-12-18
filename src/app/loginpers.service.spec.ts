import { TestBed, inject } from '@angular/core/testing';

import { LoginpersService } from './loginpers.service';

describe('LoginpersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginpersService]
    });
  });

  it('should be created', inject([LoginpersService], (service: LoginpersService) => {
    expect(service).toBeTruthy();
  }));
});
