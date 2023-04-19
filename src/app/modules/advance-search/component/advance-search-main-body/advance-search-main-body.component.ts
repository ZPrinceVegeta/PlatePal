import { Component } from '@angular/core';

@Component({
  selector: 'app-advance-search-main-body',
  templateUrl: './advance-search-main-body.component.html',
  styleUrls: ['./advance-search-main-body.component.scss']
})
export class AdvanceSearchMainBodyComponent {
  search_text:string='rect'
  mealInclusionFiler:Boolean=false
  openMealInclusionFilter(){
    this.mealInclusionFiler=true
  }
}
