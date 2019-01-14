import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionCreateComponent } from './opcionCreate.component';

describe('OpcionCreateComponent', () => {
  let component: OpcionCreateComponent;
  let fixture: ComponentFixture<OpcionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
