import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDeleteComponent } from './detalleDelete.component';

describe('DetalleDeleteComponent', () => {
  let component: DetalleDeleteComponent;
  let fixture: ComponentFixture<DetalleDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
