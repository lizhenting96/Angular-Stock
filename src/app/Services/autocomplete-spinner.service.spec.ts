import { TestBed } from '@angular/core/testing';

import { SpinnerService } from './autocomplete-spinner.service';

describe('AutocompleteSpinnerServiceService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
