import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoEditComponent } from './destinoEdit.component';

describe('DestinoEditComponent', () => {
  let component: DestinoEditComponent;
  let fixture: ComponentFixture<DestinoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
