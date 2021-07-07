import { TestBed } from '@angular/core/testing';

import { SongsPackageService } from './songs-package.service';

describe('SongsPackageService', () => {
  let service: SongsPackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongsPackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
