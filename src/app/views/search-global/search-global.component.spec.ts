import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchGlobalComponent } from './search-global.component';

describe('SearchGlobalComponent', () => {
  let component: SearchGlobalComponent;
  let fixture: ComponentFixture<SearchGlobalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
