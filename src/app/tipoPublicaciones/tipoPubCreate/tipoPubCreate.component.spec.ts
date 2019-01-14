import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPubCreateComponent } from './tipoPubCreate.component';

describe('TipoPubCreateComponent', () => {
  let component: TipoPubCreateComponent;
  let fixture: ComponentFixture<TipoPubCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPubCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPubCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
