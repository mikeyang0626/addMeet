import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardService } from 'shared/services/auth-guard.service';

describe('AuthGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardService]
    });
  });

  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
