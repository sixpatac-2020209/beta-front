import { TestBed } from '@angular/core/testing';

import { ExportExcelResultadosService } from './export-excel-resultados.service';

describe('ExportExcelResultadosService', () => {
  let service: ExportExcelResultadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportExcelResultadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
