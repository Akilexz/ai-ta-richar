import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionListComponent } from './opcionList.component';

describe('PublicacionesComponent', () => {
  let component: OpcionListComponent;
  let fixture: ComponentFixture<OpcionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
