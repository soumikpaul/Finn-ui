import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerChartsComponent } from './manager-charts.component';

describe('ManagerChartsComponent', () => {
  let component: ManagerChartsComponent;
  let fixture: ComponentFixture<ManagerChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
