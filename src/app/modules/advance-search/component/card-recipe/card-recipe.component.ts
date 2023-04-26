import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.scss'],
})
export class CardRecipeComponent implements OnInit, AfterViewInit {
  @Input() passedData: any;
  @Output() switchQuickFlag:EventEmitter<any>=new EventEmitter()
  leftPosition!:number
  constructor(private elementref: ElementRef) {}
  ngAfterViewInit(): void {
    const myElement=this.elementref.nativeElement.querySelector('#recipeCard')
    this.leftPosition = myElement.offsetLeft;

    // console.log('Left position:', leftPosition);
  }
  is_details_expand: Boolean = false
  ngOnInit(): void {
    this.is_details_expand = false;
  }
  thumbNail!: HTMLElement;
  openQuickView(id:number){
    this.switchQuickFlag.emit(id)
    this.is_details_expand=true
    const element=this.elementref.nativeElement.querySelector('#expandedRecipe')
    element.style.left=`-${this.leftPosition}px`

  }
}
