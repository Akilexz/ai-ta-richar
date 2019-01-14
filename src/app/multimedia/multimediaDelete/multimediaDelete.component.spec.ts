import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaDeleteComponent } from './multimediadelete.component';

describe('MultimediaDeleteComponent', () => {
  let component: MultimediaDeleteComponent;
  let fixture: ComponentFixture<MultimediaDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultimediaDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
