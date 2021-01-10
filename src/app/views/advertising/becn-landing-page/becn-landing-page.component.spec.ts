import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecnLandingPageComponent } from './becn-landing-page.component';

describe('BecnLandingPageComponent', () => {
  let component: BecnLandingPageComponent;
  let fixture: ComponentFixture<BecnLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecnLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecnLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
