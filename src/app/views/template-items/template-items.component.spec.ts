import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TemplateItemsComponent } from './template-items.component';

describe('TemplateItemsComponent', () => {
  let component: TemplateItemsComponent;
  let fixture: ComponentFixture<TemplateItemsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
