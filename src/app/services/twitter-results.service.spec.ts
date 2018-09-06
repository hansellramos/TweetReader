import { TestBed, inject } from '@angular/core/testing';

import { TwitterResultsService } from './twitter-results.service';

describe('TwitterResultsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitterResultsService]
    });
  });

  it('should be created', inject([TwitterResultsService], (service: TwitterResultsService) => {
    expect(service).toBeTruthy();
  }));
});
