import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectOrderComponent } from './perfect-order.component';

describe('PerfectOrderComponent', () => {
  let component: PerfectOrderComponent;
  let fixture: ComponentFixture<PerfectOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfectOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfectOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
