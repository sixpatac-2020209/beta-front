import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosOrdenOperariosComponent } from './articulos-orden-operarios.component';

describe('ArticulosOrdenOperariosComponent', () => {
  let component: ArticulosOrdenOperariosComponent;
  let fixture: ComponentFixture<ArticulosOrdenOperariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosOrdenOperariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticulosOrdenOperariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
