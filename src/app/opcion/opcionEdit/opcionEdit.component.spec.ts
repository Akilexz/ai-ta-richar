import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionEditComponent } from './opcionEdit.component';

describe('EditComponent', () => {
  let component: OpcionEditComponent;
  let fixture: ComponentFixture<OpcionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
