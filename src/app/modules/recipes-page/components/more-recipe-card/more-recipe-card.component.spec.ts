import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreRecipeCardComponent } from './more-recipe-card.component';

describe('MoreRecipeCardComponent', () => {
  let component: MoreRecipeCardComponent;
  let fixture: ComponentFixture<MoreRecipeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreRecipeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreRecipeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
