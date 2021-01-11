import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ToolsNavbarComponent } from './tools-navbar.component';

describe('ToolsNavbarComponent', () => {
  let component: ToolsNavbarComponent;
  let fixture: ComponentFixture<ToolsNavbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
