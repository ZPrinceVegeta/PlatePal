import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { BreakpointresponsiveService } from './../../../comman/service/breakpointresponsive.service';
import {
  Component,
  Input,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.scss'],
})
export class CardRecipeComponent implements OnInit, AfterViewInit {
  @Input() passedData: any;
  @Output() switchQuickFlag: EventEmitter<any> = new EventEmitter();
  destroyed = new Subject<void>();
  currentScreen: string = '';
  leftPosition!: number;
  croppedImage: any = '';

  constructor(
    private elementref: ElementRef,
    private responsive: BreakpointresponsiveService,
    private router : Router
  ) {}
  ngAfterViewInit(): void {
    const myElement =
      this.elementref.nativeElement.querySelector('#recipeCard');
    this.leftPosition = myElement.offsetLeft;

    // console.log('Left position:', leftPosition);
  }
  is_details_expand: Boolean = false;
  ngOnInit(): void {
    this.is_details_expand = false;
    this.responsive.currentScreenSize$
      .pipe(takeUntil(this.destroyed))
      .subscribe({
        next: (res) => {
          this.currentScreen=res
        },
      });
  }
  thumbNail!: HTMLElement;
  openQuickView(event: MouseEvent, id: number) {
    event.stopPropagation();
    this.switchQuickFlag.emit(id);
    this.is_details_expand = true;
  }
  calculateRating(rating: any) {
    if (rating) {
      const user_rating = Math.round(rating.score * 4) + 1;
      return `${user_rating}/5`;
    } else {
      return '1/5';
    }
  }
  viewRecipe() {
    console.log(this.passedData);

    if(this.passedData.response_type.toLowerCase() == 'recipe'){
      this.router.navigate(['/recipe',{slug:this.passedData?.slug}])
    }
    else if(this.passedData.response_type.toLowerCase() == "compilation"){

      this.router.navigate(['/compilation',{slug:this.passedData?.slug}])

    }
  }
}
