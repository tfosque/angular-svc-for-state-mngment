import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DelivertTrackingComponent } from './delivert-tracking.component';

describe('DelivertTrackingComponent', () => {
  let component: DelivertTrackingComponent;
  let fixture: ComponentFixture<DelivertTrackingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DelivertTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivertTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
