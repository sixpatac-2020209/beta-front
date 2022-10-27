import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionGerenteComponent } from './programacion-gerente.component';

describe('ProgramacionGerenteComponent', () => {
  let component: ProgramacionGerenteComponent;
  let fixture: ComponentFixture<ProgramacionGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramacionGerenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramacionGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
