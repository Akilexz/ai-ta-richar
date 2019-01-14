import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionDeleteComponent } from './opcionDelete.component';

describe('DeleteComponent', () => {
  let component: OpcionDeleteComponent;
  let fixture: ComponentFixture<OpcionDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
