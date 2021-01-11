import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyBranchComponent } from './my-branch.component';

describe('MyBranchComponent', () => {
  let component: MyBranchComponent;
  let fixture: ComponentFixture<MyBranchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
