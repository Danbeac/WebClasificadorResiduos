import { TestBed } from '@angular/core/testing';

import { LoaderImageBase64Service } from './loader-image-base64.service';

describe('LoaderImageBase64Service', () => {
  let service: LoaderImageBase64Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderImageBase64Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
