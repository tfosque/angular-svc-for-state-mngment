import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PromotinTrackerComponent } from './promotin-tracker.component';

describe('PromotinTrackerComponent', () => {
  let component: PromotinTrackerComponent;
  let fixture: ComponentFixture<PromotinTrackerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotinTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotinTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
