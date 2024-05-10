import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipePageDisplayComponent } from './recipe-page-display.component';

describe('RecipePageDisplayComponent', () => {
  let component: RecipePageDisplayComponent;
  let fixture: ComponentFixture<RecipePageDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipePageDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipePageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
