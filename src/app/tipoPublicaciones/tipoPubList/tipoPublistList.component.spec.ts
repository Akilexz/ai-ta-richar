import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPubListComponent } from './tipoPublist.component';

describe('TipoPubListComponent', () => {
  let component: TipoPubListComponent;
  let fixture: ComponentFixture<TipoPubListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoPubListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
