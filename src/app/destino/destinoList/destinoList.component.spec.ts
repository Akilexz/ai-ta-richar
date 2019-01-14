import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoListComponent } from './destinoList.component';


describe('DestinoListComponent', () => {
  let component: DestinoListComponent;
  let fixture: ComponentFixture<DestinoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
