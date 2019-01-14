import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaEditComponent } from './multimediaEdit.component';

describe('EditComponent', () => {
  let component: MultimediaEditComponent;
  let fixture: ComponentFixture<MultimediaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultimediaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
