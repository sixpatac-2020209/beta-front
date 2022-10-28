import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOrdenOperariosComponent } from './detalle-orden-operarios.component';

describe('DetalleOrdenOperariosComponent', () => {
  let component: DetalleOrdenOperariosComponent;
  let fixture: ComponentFixture<DetalleOrdenOperariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleOrdenOperariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleOrdenOperariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
