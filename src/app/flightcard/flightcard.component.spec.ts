import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightcardComponent } from './flightcard.component';

describe('FlightcardComponent', () => {
  let component: FlightcardComponent;
  let fixture: ComponentFixture<FlightcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
