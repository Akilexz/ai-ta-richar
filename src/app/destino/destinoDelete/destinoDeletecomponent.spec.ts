import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoDeleteComponent } from './destinoDelete.component';

describe('DestinoDeleteComponent', () => {
  let component: DestinoDeleteComponent;
  let fixture: ComponentFixture<DestinoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
