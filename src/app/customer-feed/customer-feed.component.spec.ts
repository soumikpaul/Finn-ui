import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFeedComponent } from './customer-feed.component';

describe('CustomerFeedComponent', () => {
  let component: CustomerFeedComponent;
  let fixture: ComponentFixture<CustomerFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
