import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoCreateComponent } from './destinoCreate.component';

describe('DestinoCreateComponent', () => {
  let component: DestinoCreateComponent;
  let fixture: ComponentFixture<DestinoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
