import { Detalle } from './../../models/Detalle';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCreateComponent } from './detalleCreate.component';

describe('DetalleCreateComponent', () => {
  let component: DetalleCreateComponent;
  let fixture: ComponentFixture<DetalleCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
