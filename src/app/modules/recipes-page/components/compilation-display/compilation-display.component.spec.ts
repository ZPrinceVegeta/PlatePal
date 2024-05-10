import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilationDisplayComponent } from './compilation-display.component';

describe('CompilationDisplayComponent', () => {
  let component: CompilationDisplayComponent;
  let fixture: ComponentFixture<CompilationDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompilationDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompilationDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
