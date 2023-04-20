import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdadvSearchHeaderComponent } from './adadv-search-header.component';

describe('AdadvSearchHeaderComponent', () => {
  let component: AdadvSearchHeaderComponent;
  let fixture: ComponentFixture<AdadvSearchHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdadvSearchHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdadvSearchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
