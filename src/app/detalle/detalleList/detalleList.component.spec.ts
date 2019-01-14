import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleListComponent } from './detalleList.component';

describe('DetalleListComponent', () => {
  let component: DetalleListComponent;
  let fixture: ComponentFixture<DetalleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
