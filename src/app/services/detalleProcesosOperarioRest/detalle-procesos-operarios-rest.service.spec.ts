import { TestBed } from '@angular/core/testing';

import { DetalleProcesosOperariosRestService } from './detalle-procesos-operarios-rest.service';

describe('DetalleProcesosOperariosRestService', () => {
  let service: DetalleProcesosOperariosRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleProcesosOperariosRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
