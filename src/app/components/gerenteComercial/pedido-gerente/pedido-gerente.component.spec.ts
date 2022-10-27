import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoGerenteComponent } from './pedido-gerente.component';

describe('PedidoGerenteComponent', () => {
  let component: PedidoGerenteComponent;
  let fixture: ComponentFixture<PedidoGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoGerenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
