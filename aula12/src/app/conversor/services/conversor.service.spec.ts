/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConversorService } from './conversor.service';

describe('ConversorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConversorService]
    });
  });

  it('should ...', inject([ConversorService], (service: ConversorService) => {
    expect(service).toBeTruthy();
  }));
});
