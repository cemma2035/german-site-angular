import { TestBed } from '@angular/core/testing';

import { ChosenTabService } from './chosen-tab.service';

describe('ChosenTabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChosenTabService = TestBed.get(ChosenTabService);
    expect(service).toBeTruthy();
  });
});
