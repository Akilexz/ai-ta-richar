import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEditComponent } from './DetalleEdit.component';

describe('DetalleEditComponent', () => {
  let component: DetalleEditComponent;
  let fixture: ComponentFixture<DetalleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
