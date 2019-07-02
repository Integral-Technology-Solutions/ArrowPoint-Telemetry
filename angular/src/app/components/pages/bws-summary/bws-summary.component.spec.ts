import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BwsSummaryComponent } from './bws-summary.component';

describe('BwsSummaryComponent', () => {
  let component: BwsSummaryComponent;
  let fixture: ComponentFixture<BwsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BwsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BwsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
