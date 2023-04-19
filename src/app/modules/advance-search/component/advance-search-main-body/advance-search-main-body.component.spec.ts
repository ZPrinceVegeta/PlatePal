import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceSearchMainBodyComponent } from './advance-search-main-body.component';

describe('AdvanceSearchMainBodyComponent', () => {
  let component: AdvanceSearchMainBodyComponent;
  let fixture: ComponentFixture<AdvanceSearchMainBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceSearchMainBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceSearchMainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
