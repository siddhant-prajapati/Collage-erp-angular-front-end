import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { staffAuthGuard } from './staff-auth.guard';

describe('staffAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => staffAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
