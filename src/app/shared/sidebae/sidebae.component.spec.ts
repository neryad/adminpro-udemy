import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebaeComponent } from './sidebae.component';

describe('SidebaeComponent', () => {
  let component: SidebaeComponent;
  let fixture: ComponentFixture<SidebaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
