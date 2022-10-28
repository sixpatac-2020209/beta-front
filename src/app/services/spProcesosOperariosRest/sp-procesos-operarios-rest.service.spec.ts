import { TestBed } from '@angular/core/testing';

import { SpProcesosOperariosRestService } from './sp-procesos-operarios-rest.service';

describe('SpProcesosOperariosRestService', () => {
  let service: SpProcesosOperariosRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpProcesosOperariosRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
