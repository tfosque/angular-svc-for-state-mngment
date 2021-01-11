import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PromotionTrackerComponent } from './promotion-tracker.component';

describe('PromotionTrackerComponent', () => {
  let component: PromotionTrackerComponent;
  let fixture: ComponentFixture<PromotionTrackerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionTrackerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
