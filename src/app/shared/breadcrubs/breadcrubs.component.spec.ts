import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrubsComponent } from './breadcrubs.component';

describe('BreadcrubsComponent', () => {
  let component: BreadcrubsComponent;
  let fixture: ComponentFixture<BreadcrubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
