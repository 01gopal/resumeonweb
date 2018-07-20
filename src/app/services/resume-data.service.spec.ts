import { TestBed, inject } from '@angular/core/testing';

import { ResumeDataService } from './resume-data.service';

describe('ResumeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResumeDataService]
    });
  });

  it('should be created', inject([ResumeDataService], (service: ResumeDataService) => {
    expect(service).toBeTruthy();
  }));
});
