import { TestBed } from '@angular/core/testing';

import { ApiModelPredictService } from './api-model-predict.service';

describe('ApiModelPredictService', () => {
  let service: ApiModelPredictService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiModelPredictService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
