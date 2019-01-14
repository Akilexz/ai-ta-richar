import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPubEditComponent } from './tipoPuEdit.component';

describe('TipoPubEditComponent', () => {
  let component: TipoPubEditComponent;
  let fixture: ComponentFixture<TipoPubEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPubEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPubEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
