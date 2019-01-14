import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaListComponent } from './multimediaList.component';

describe('PublicacionesComponent', () => {
  let component: MultimediaListComponent;
  let fixture: ComponentFixture<MultimediaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultimediaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
