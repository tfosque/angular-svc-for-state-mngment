import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecnBlogComponent } from './becn-blog.component';

describe('BecnBlogComponent', () => {
  let component: BecnBlogComponent;
  let fixture: ComponentFixture<BecnBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecnBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecnBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
