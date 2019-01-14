import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPubDeleteComponent } from './tipPubDelete.component';

describe('TipoPubDeleteComponent', () => {
  let component: TipoPubDeleteComponent;
  let fixture: ComponentFixture<TipoPubDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPubDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPubDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
