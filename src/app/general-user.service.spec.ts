import { TestBed, inject } from '@angular/core/testing';

import { GeneralUserService } from './general-user.service';

describe('GeneralUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralUserService]
    });
  });

  it('should be created', inject([GeneralUserService], (service: GeneralUserService) => {
    expect(service).toBeTruthy();
  }));
});
